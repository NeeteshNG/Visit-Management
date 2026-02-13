from datetime import timedelta

try:
    from xhtml2pdf import pisa
except ImportError:
    pisa = None  # PDF generation will be unavailable

from django.conf import settings
from django.contrib.auth.models import Permission
from django.http import HttpResponse
from django.template.loader import get_template
from django.shortcuts import get_object_or_404
from django.utils import timezone
from django.shortcuts import render
from django.shortcuts import get_object_or_404
from django.utils.timezone import now

from rest_framework import generics, permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response

from .serializers import (
    ChangePasswordSerializer,
    CustomUserSerializerLoginDetails,
    ForgotPasswordSerializer,
    ResendOTPSerializer,
    ResetPasswordSerializer,
    VerifyOTPSerializer,
    CustomUserUpdateSerializer,
    CustomUserImageUpdateSerializer,
    CustomUserSerializer,
    CreateUserPermissionSerializer,
)

from . import usecases, serializers
from .models import CustomUser, Subscription
from api_service.settings import production
from .utils import generate_otp, send_otp_to_user, generate_sms_text, send_email
from organization.utils import send_notification

from organization.models import OrganizationKYC, OrganizationFCMToken


@api_view(["GET"])
def get_all_permissions(request):
    all_permissions = Permission.objects.all()
    permission_list = [
        {"id": p.id, "codename": p.codename, "name": p.name} for p in all_permissions
    ]
    return Response({"permissions": permission_list}, status=status.HTTP_200_OK)


class MobileNumberTokenObtainPairView(TokenObtainPairView):
    username_field = "mobile_number"


class RegisterUserView(generics.CreateAPIView):
    serializer_class = CustomUserSerializer

    def perform_create(self, serializer):
        user = serializer.save()
        email = user.email
        otp = generate_otp()
        text = generate_sms_text(otp)
        send_email(text, "verify your email", email)
        send_otp_to_user(user.mobile_number, text)
        user.otp = otp
        user.otp_created_at = now()
        user.save()

        notification_data = {
            "notification_type": "wishes",
            "title": "Welcome to Our Platform!",
            "message": "Congratulations on successfully registering with us!",
        }
        send_notification(user=user, notification_data=notification_data)

        return Response(
            {"message": "OTP sent for verification"}, status=status.HTTP_201_CREATED
        )


class VerifyOTPView(generics.CreateAPIView):
    serializer_class = VerifyOTPSerializer

    def post(self, request, *args, **kwargs):
        mobile_number = request.data.get("mobile_number")
        otp = request.data.get("otp")
        try:
            user = CustomUser.objects.get(mobile_number=mobile_number, otp=otp)
        except CustomUser.DoesNotExist:
            raise ValidationError("Invalid mobile number or OTP")

        otp_expiry_time = user.otp_created_at + timedelta(minutes=10)

        if timezone.now() > otp_expiry_time:
            raise ValidationError("OTP has expired")
        user.is_sms_verified = True
        user.is_active = True
        user.admin_of_organization = True
        user.save()
        return Response(
            {"message": "OTP verified successfully"}, status=status.HTTP_200_OK
        )


class LoginView(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.LoginSerializer

    def perform_create(self, serializer):
        return usecases.LoginUseCase(
            serializer=serializer, request=self.request
        ).execute()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        response = self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(response, status=status.HTTP_200_OK, headers=headers)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def SubsOfOrg(request):
    try:
        response_data = Subscription.objects.filter(user=request.user).values(
            "subscription_id", "start_subscription", "end_subscription"
        )
        return Response(response_data, status=status.HTTP_200_OK)
    except Subscription.DoesNotExist:
        raise ValidationError("No Subscription")


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def AddStaffForORG(request):
    # Check if the user making the request is an admin of the organization
    if not request.user.admin_of_organization:
        return Response(
            {"error": "Only admin users can create accounts."},
            status=status.HTTP_403_FORBIDDEN,
        )

    # Check if the request includes the necessary data
    if "permissions" not in request.data:
        return Response(
            {"error": "Permissions field is required in the request data."},
            status=status.HTTP_400_BAD_REQUEST,
        )

    # Extract permissions from the request data
    permission_codenames = request.data["permissions"]

    # Validate and create the user using the serializer
    serializer = CreateUserPermissionSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()

        # Add dynamic permissions based on the request data
        permissions = Permission.objects.filter(codename__in=permission_codenames)
        user.user_permissions.set(permissions)

        return Response(
            {"message": "User registered successfully", "user_id": user.id},
            status=status.HTTP_201_CREATED,
        )

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ForgotPasswordView(generics.CreateAPIView):
    serializer_class = ForgotPasswordSerializer
    permission_classes = [permissions.AllowAny]
    queryset = ""

    def perform_create(self, serializer):
        return usecases.ForgetPasswordUseCase(serializer=serializer).execute()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {"message": "Reset OTP sent for verification"}, status=status.HTTP_200_OK
        )


class ResetPasswordView(generics.UpdateAPIView):
    serializer_class = ResetPasswordSerializer
    permission_classes = [permissions.AllowAny]

    def put(self, request, *args, **kwargs):
        mobile_number = request.data.get("mobile_number")
        otp = request.data.get("otp")
        new_password = request.data.get("new_password")
        try:
            user = CustomUser.objects.get(mobile_number=mobile_number, otp=otp)
        except CustomUser.DoesNotExist:
            raise ValidationError("Invalid mobile number or reset OTP")

        otp_expiry_time = user.otp_created_at + timedelta(minutes=10)

        if timezone.now() > otp_expiry_time:
            raise ValidationError("OTP has expired")

        notification_data = {
            "title": "Password Reset Successful",
            "message": "Your password has been reset successfully. If you did not initiate this change, please contact support immediately.",
        }

        send_notification(user, notification_data)

        user.set_password(new_password)
        user.save()

        return Response(
            {"message": "Password reset successful"}, status=status.HTTP_200_OK
        )


class ChangePasswordView(generics.UpdateAPIView):
    serializer_class = ChangePasswordSerializer
    permission_classes = [IsAuthenticated]

    def patch(self, request, *args, **kwargs):
        user = request.user

        old_password = request.data.get("old_password")

        if not user.check_password(old_password):
            raise ValidationError("Old Password does not match.")

        new_password = request.data.get("new_password")

        if user.check_password(new_password):
            raise ValidationError("New password cannot be the same as the old password")

        if request.data.get("request_otp"):
            otp = generate_otp()
            otp_message = (
                f"Dear User please use this OTP code to "
                f"change your password your code is {otp}. This is for one "
                f"time use only. Thank you!"
            )

            notification_data = {"title": "Change Password", "message": otp_message}

            send_notification(user, notification_data)

            send_otp_to_user(user.mobile_number, otp_message)
            user.otp = otp
            user.otp_created_at = timezone.now()
            user.save()

            return Response(
                {"message": "OTP sent to your email."}, status=status.HTTP_200_OK
            )

        otp = request.data.get("otp")

        if not otp or not new_password:
            raise ValidationError("OTP and new password are required")

        if not (str(user.otp) == otp):
            raise ValidationError("Invalid OTP")

        user.set_password(new_password)
        user.save()

        notification_data = {
            "title": "Password Changed",
            "message": "Your password has been successfully changed.",
        }

        send_notification(user, notification_data)

        return Response(
            {"message": "Password changed successfully"}, status=status.HTTP_200_OK
        )


class UserListView(generics.ListAPIView):
    serializer_class = CustomUserSerializer

    # permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        users = CustomUser.objects.all()
        return users

    def get(self, request, *args, **kwargs):
        users = self.get_queryset()
        serializer = self.serializer_class(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class LoggedinUserDataView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        user = request.user
        serializer = CustomUserSerializerLoginDetails(user)
        return Response(serializer.data)


class ResendOTPView(generics.CreateAPIView):
    serializer_class = ResendOTPSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        mobile_number = request.data.get("mobile_number")

        try:
            user = CustomUser.objects.get(
                mobile_number=mobile_number, is_sms_verified=False
            )
        except CustomUser.DoesNotExist:
            raise ValidationError("Invalid mobile number or user is already verified")

        otp = generate_otp()
        sms_text = (
            f"Welcome back to NGtry! "
            f"Your verification code is: {otp}. "
            f"This code is valid for the next 10 minutes. "
            f"Enjoy using NGtry!"
        )
        send_otp_to_user(user.mobile_number, sms_text)
        user.otp = otp
        user.otp_created_at = timezone.now()
        user.save()

        return Response(
            {"message": "Resent OTP for verification"}, status=status.HTTP_200_OK
        )


class GenerateTestQR(APIView):
    def get(self, request):
        pass


def qr_code_view(request, pk):
    try:
        url = f"{settings.BASE_API_URL}{settings.MEDIA_URL}"
        logo_path = "logo/ngtry.png"
        org_info = get_object_or_404(CustomUser, id=pk)
        org_details = get_object_or_404(OrganizationKYC, organization=pk)
        context = {
            "background_image_url": f"{url}{logo_path}" if logo_path else "",
            "terminal_number": f"{org_info.id}" if org_info.id is not None else "",
            "background_qr_url": f"{url}{org_info.qr}" if org_info.qr else "",
            "organization_name": (
                org_info.organization_name if org_info.organization_name else ""
            ),
            "organization_location": (
                f"{org_details.state},{org_details.district}"
                if org_details.state and org_details.district
                else ""
            ),
        }
        return render(request, "qr_code.html", context)
    except CustomUser.DoesNotExist:
        return render(request, "error.html", {"error_message": "User not found"})
    except OrganizationKYC.DoesNotExist:
        return render(
            request, "error.html", {"error_message": "Organization details not found"}
        )
    except Exception as e:
        return render(
            request, "error.html", {"error_message": "An unexpected error occurred"}
        )


class UserUpdateView(generics.UpdateAPIView):
    serializer_class = CustomUserUpdateSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        user_id = self.kwargs.get("user_id")
        user = CustomUser.objects.filter(pk=user_id).first()
        if not user:
            raise ValidationError({"error": "Organization does not exist for given id"})
        return user

    def perform_update(self, serializer):
        return usecases.UserUpdateUseCase(
            instance=self.get_object(), serializer=serializer
        ).execute()

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop("partial", False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if getattr(instance, "_prefetched_objects_cache", None):
            # If 'prefetch_related' has been applied to a queryset, we need to
            # forcibly invalidate the prefetch cache on the instance.
            instance._prefetched_objects_cache = {}

        return Response("User updated successfully.")


class UserImageUpdateView(generics.UpdateAPIView):
    serializer_class = CustomUserImageUpdateSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        user_id = self.kwargs.get("user_id")
        user = CustomUser.objects.filter(pk=user_id).first()
        if not user:
            raise ValidationError({"error": "Organization does not exist for given id"})
        return user

    def perform_update(self, serializer):
        return usecases.UserImageUpdateUseCase(
            instance=self.get_object(), serializer=serializer
        ).execute()

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop("partial", False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if getattr(instance, "_prefetched_objects_cache", None):
            # If 'prefetch_related' has been applied to a queryset, we need to
            # forcibly invalidate the prefetch cache on the instance.
            instance._prefetched_objects_cache = {}

        return Response("Image updated successfully.")


class DownloadOrganizationQRCodeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, organization_id):
        organization_instance = CustomUser.objects.filter(
            pk=organization_id, is_organization=True
        ).first()
        if not organization_instance:
            raise ValidationError({"error": "Organization not found for given id."})

        return Response(
            {
                "organization_id": organization_id,
                "qr_image": organization_instance.qr.url,
            }
        )


class DownloadVisitorQRCodeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, visitor_id):
        visitor_instance = CustomUser.objects.filter(
            pk=visitor_id, is_organization=False, is_visitor=True
        ).first()
        if not visitor_instance:
            raise ValidationError({"error": "Visitor  not found for given id."})

        return Response({"visitor_id": visitor_id, "qr_image": visitor_instance.qr.url})


class DeleteVisitorView(generics.DestroyAPIView):
    def get_object(self):
        visitor_instance = CustomUser.objects.filter(
            pk=self.kwargs["visitor_id"], is_organization=False, is_visitor=True
        ).first()
        if not visitor_instance:
            raise ValidationError({"error": "Visitor not found for given id. "})

    def perform_destroy(self, instance):
        instance.delete()


class ListALluser(generics.ListAPIView):
    serializer_class = CustomUserSerializer

    def get_queryset(self):
        return CustomUser.objects.all()


class DownloadVisitorPDFView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        # Retrieve path parameters from kwargs
        visitor_instance = CustomUser.objects.filter(
            pk=self.kwargs["visitor_id"], is_organization=False, is_visitor=True
        ).first()
        if not visitor_instance:
            raise ValidationError({"error": "Visitor not found for given id. "})
        template = get_template("visitor_details.html")
        html = template.render({"visitor": visitor_instance})

        pdf_response = HttpResponse(content_type="application/pdf")
        pdf_response["Content-Disposition"] = (
            'attachment; filename="visitor_details.pdf"'
        )

        # Generate PDF from HTML content
        pisa.CreatePDF(html, dest=pdf_response)

        return pdf_response


class ApproveVisitorsToggleView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, user_id):
        user = get_object_or_404(CustomUser, pk=user_id)
        user.approve_visitors = not user.approve_visitors
        user.save()
        return Response(
            {"message": "Approve visitors state changed successfully."},
            status=status.HTTP_200_OK,
        )


class LogoutAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        fcm_token = request.data.get("fcm_token")

        if not fcm_token:
            return Response(
                {"error": "FCM token is required."}, status=status.HTTP_400_BAD_REQUEST
            )

        if fcm_token:
            fcm_tokens = OrganizationFCMToken.objects.filter(
                fcm_token=fcm_token, organization=request.user
            )
            if fcm_tokens.exists():
                fcm_tokens.delete()

        return Response(
            {"message": "Logged out successfully."}, status=status.HTTP_200_OK
        )


class UpdateUserView(generics.UpdateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user

    def perform_update(self, serializer):
        serializer.save()

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop("partial", False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        return Response(serializer.data)
