from django.conf import settings
from django.contrib import admin
from django.utils.html import format_html

from .models import (
    OrganizationBranch,
    OrganizationDocument,
    OrganizationKYC,
    OrganizationSocialMediaLink,
    OrganizationVisitHistory,
    AdsBanner,
    Guest,
    Meetingappoiment,
    CustomerRegistration,
    Purpose,
)
from common.admin import CustomModelAdmin
from .utils import send_notification


class OrganizationKYCAdmin(CustomModelAdmin):
    list_display = [
        "organization",
        "establishment_year",
        "vat_number",
        "pan_number",
        "registration_number",
        "country",
        "state",
        "district",
        "municipality",
    ]
    list_filter = [
        "organization",
        "establishment_year",
        "vat_number",
        "pan_number",
        "registration_number",
        "country",
        "state",
        "district",
        "municipality",
        "city_village_area",
        "ward_no",
        "organization_summary",
        "whatsapp_viber_number",
        "secondary_number",
        "telephone_number",
    ]
    search_fields = [
        "organization__organization_name",
        "establishment_year",
        "vat_number",
        "pan_number",
        "registration_number",
        "country",
        "state",
        "district",
        "municipality",
    ]
    ordering = ["organization"]
    list_per_page = 20

    def save_model(self, request, obj, form, change):
        if change:
            previous = OrganizationKYC.objects.get(pk=obj.pk)
            if previous.status != obj.status:
                if obj.status == "Accepted":
                    notification_data = {
                        "notification_type": "other",
                        "audience": "organization",
                        "title": "KYC Approval",
                        "message": "Your KYC has been approved.",
                    }
                    send_notification(
                        user=obj.organization, notification_data=notification_data
                    )
                    user = obj.organization
                    user.is_kyc_verified = True
                    user.save()

                elif obj.status == "Rejected":
                    notification_data = {
                        "notification_type": "other",
                        "audience": "organization",
                        "title": "KYC Rejection",
                        "message": "Your KYC has been rejected.",
                    }
                    send_notification(
                        user=obj.organization, notification_data=notification_data
                    )

                    user = obj.organization
                    user.is_kyc_verified = False
                    user.save()

        super().save_model(request, obj, form, change)


admin.site.register(OrganizationKYC, OrganizationKYCAdmin)


class OrganizationVisitHistoryAdmin(CustomModelAdmin):
    list_display = [
        "organization",
        "visitor",
        "full_name",
        "mobile_number",
        "purpose",
        "visiting_from",
        "is_approved",
        "visited_at",
        "departed_at",
        "visit_type",
    ]
    list_display_links = ("organization", "visitor", "full_name")
    list_filter = [
        "organization",
        "visitor",
        "full_name",
        "mobile_number",
        "purpose",
        "have_vehicle",
        "vehicle_number",
        "is_with_team",
        "number_of_team",
        "visiting_from",
        "is_approved",
        "visited_at",
        "departed_at",
    ]
    search_fields = [
        "organization__organization_name",
        "full_name",
        "mobile_number",
        "purpose",
        "have_vehicle",
        "vehicle_number",
        "is_with_team",
        "number_of_team",
        "visiting_from",
        "is_approved",
        "visited_at",
        "departed_at",
    ]
    ordering = ["organization"]
    list_per_page = 20


admin.site.register(OrganizationVisitHistory, OrganizationVisitHistoryAdmin)


class OrganizationBranchAdmin(CustomModelAdmin):
    list_display = [
        "organization",
        "name",
        "country",
        "state",
        "district",
        "municipality",
        "city_village_area",
        "ward_no",
        "qr_image_preview",
    ]
    list_filter = [
        "organization",
        "name",
        "country",
        "state",
        "district",
        "municipality",
        "city_village_area",
        "ward_no",
        "employee_size",
    ]
    search_fields = ["organization__organization_name", "name"]
    ordering = ["organization"]
    list_per_page = 20
    readonly_fields = ["qr_image"]

    def qr_image_preview(self, obj):
        if obj.qr_image:
            absolute_url = f"{settings.MEDIA_URL}{obj.qr_image.name}"
            return format_html(
                '<img src="{}" style="max-width: 130px; max-height: 130px;" />',
                absolute_url,
            )
        else:
            return ""

    qr_image_preview.short_description = "QR Code Image"


admin.site.register(OrganizationBranch, OrganizationBranchAdmin)


# @admin.register(OrganizationSocialMediaLink)
# class OrganizationSocialMediaLinkAdmin(admin.ModelAdmin):
#     list_display = (
#         "organization",
#         "platform",
#         "link",
#     )
#     search_fields = ("organization__full_name","organization__organization_name", "platform")
#     list_per_page = 20

#     fieldsets = (
#         (
#             "Social Media Information",
#             {
#                 "fields": (
#                     "organization",
#                     "platform",
#                     "link",
#                 ),
#             },
#         ),
#     )


class OrganizationDocumentAdmin(CustomModelAdmin):
    list_display = ["organization", "name", "file"]
    list_filter = ["organization", "name", "file"]
    search_fields = ["organization__organization_name", "name", "file"]
    ordering = ["name"]
    list_per_page = 20


admin.site.register(OrganizationDocument, OrganizationDocumentAdmin)


class OrganizationContentAdmin(CustomModelAdmin):
    list_display = ["organization_id"]
    search_fields = ["organization_id"]


@admin.register(Purpose)
class PurposeAdmin(CustomModelAdmin):
    list_display = ["text_field"]


@admin.register(AdsBanner)
class AdsBannerAdmin(CustomModelAdmin):
    list_display = ("title", "image_preview", "link_url", "created_at")
    search_fields = ("title",)
    readonly_fields = ("image_preview",)

    def image_preview(self, obj):
        return obj.image.url if obj.image else None

    image_preview.short_description = "Image Preview"


class GuestAdmin(admin.ModelAdmin):
    list_display = ("full_name", "mobile_number", "email", "created_at")


admin.site.register(Guest, GuestAdmin)


class MeetingAppoiment(admin.ModelAdmin):
    list_display = ("full_name", "location", "meeting_type")
    search_fields = ("full_name", "location", "meeting_type")


admin.site.register(Meetingappoiment, MeetingAppoiment)


class CustomerRegistrationAdmin(admin.ModelAdmin):
    list_display = ("full_name", "email", "mobile_number", "company_name", "created_at")
    search_fields = ("full_name", "email", "mobile_number")
    list_filter = ("company_name", "country", "created_at")
    ordering = ("-created_at",)
    date_hierarchy = "created_at"
    fields = (
        "full_name",
        "mobile_number",
        "email",
        "type_of_id",
        "id_number",
        "company_name",
        "country",
        "state",
        "city",
        "additional_requirements",
        "created_at",
        "updated_at",
    )
    readonly_fields = ("created_at", "updated_at")


admin.site.register(CustomerRegistration, CustomerRegistrationAdmin)
