import uuid
import qrcode
from io import BytesIO

from django.contrib.auth.models import (
    BaseUserManager,
    AbstractBaseUser,
    PermissionsMixin,
)
from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

from ckeditor.fields import RichTextField

from common.choices import StatusChoices
from common.models import BaseModel
from common.utils import validate_file_size
from organization.choices import TYPE_OF_ID
from user.models import CustomUser

User = get_user_model()


class OrganizationKYCSocialMediaLink(BaseModel):
    name = models.CharField(max_length=100)
    link = models.URLField()

    class Meta:
        verbose_name = "Organization KYC Social Media Link"
        verbose_name_plural = "Organization KYC Social Media Links"

    def __str__(self):
        return self.name


class OrganizationKYCDocument(BaseModel):
    name = models.CharField(max_length=100)
    file = models.FileField(
        upload_to="organization_kyc/documents/%Y/%m/%d/",
        validators=[validate_file_size],
    )

    class Meta:
        verbose_name = "Organization KYC Document"
        verbose_name_plural = "Organization KYC Documents"

    def __str__(self):
        return self.name


class OrganizationKYC(BaseModel):
    organization = models.OneToOneField(
        User, on_delete=models.SET_NULL, null=True, blank=True,
        related_name="organization_kyc"
    )
    establishment_year = models.PositiveIntegerField(blank=True, null=True)
    vat_number = models.CharField(max_length=50, blank=True, null=True)
    pan_number = models.CharField(max_length=50, blank=True, null=True)
    registration_number = models.CharField(max_length=50, blank=True, null=True)
    country = models.CharField(max_length=100, blank=True, null=True)
    state = models.CharField(max_length=100, blank=True, null=True)
    district = models.CharField(max_length=100, blank=True, null=True)
    municipality = models.CharField(max_length=100, blank=True, null=True)
    city_village_area = models.CharField(max_length=100, blank=True, null=True)
    ward_no = models.IntegerField(null=True, blank=True)
    contact_person_full_name = models.CharField(max_length=200, null=True, blank=True)
    organization_summary = models.TextField(null=True, blank=True)
    whatsapp_viber_number = models.CharField(max_length=200, null=True, blank=True)
    secondary_number = models.CharField(max_length=200, blank=True, null=True)
    telephone_number = models.CharField(max_length=200, blank=True, null=True)
    website = models.URLField(blank=True, null=True)
    logo = models.ImageField(upload_to="organization_kyc/logo/%Y/%m/%d/", blank=True, null=True)
    registration_certificate = models.ImageField(
        upload_to="organization_kyc/certificates/%Y/%m/%d/", blank=True, null=True
    )
    PAN_VAT_certificate = models.ImageField(
        upload_to="organization_kyc/certificates/%Y/%m/%d/", blank=True, null=True
    )
    licenses = models.ImageField(upload_to="organization_kyc/licenses/%Y/%m/%d/", blank=True, null=True)
    citizenship = models.ImageField(upload_to="organization_kyc/identity/%Y/%m/%d/", blank=True, null=True)
    passport = models.ImageField(upload_to="organization_kyc/identity/%Y/%m/%d/", blank=True, null=True)
    driving_license = models.ImageField(
        upload_to="organization_kyc/identity/%Y/%m/%d/", blank=True, null=True
    )
    social_media_links = models.ManyToManyField(
        to=OrganizationKYCSocialMediaLink, blank=True
    )
    documents = models.ManyToManyField(to=OrganizationKYCDocument, blank=True)

    status = models.CharField(
        choices=StatusChoices.choices, max_length=200, default=StatusChoices.PENDING
    )

    def __str__(self):
        return str(self.registration_number)

    def get_absolute_url(self):
        return f"/organization/{self.id}/"

    class Meta:
        verbose_name = "Organization KYC"
        verbose_name_plural = "Organization KYC"


class OrganizationVisitHistory(BaseModel):
    MANUAL = "Manual"
    SCAN = "Scan"

    VISIT_CHOICES = [
        (MANUAL, "Manual"),
        (SCAN, "Scan"),
    ]
    organization = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="visiting_organization",
        db_index=True,
    )
    visitor = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        related_name="visited_by",
        null=True,
        blank=True,
        db_index=True,
    )
    full_name = models.CharField(max_length=150)
    email = models.EmailField(max_length=300, blank=True, null=True)
    mobile_number = models.CharField(max_length=20, blank=True, null=True)
    purpose = models.CharField(max_length=250)
    have_vehicle = models.BooleanField(blank=True, null=True, default=False)
    vehicle_number = models.CharField(max_length=50, blank=True, null=True)
    is_with_team = models.BooleanField(blank=True, null=True, default=False)
    number_of_team = models.IntegerField(blank=True, null=True, default=0)
    visiting_from = models.CharField(max_length=250, null=True, blank=True)
    is_approved = models.BooleanField(default=False, blank=True, null=True, db_index=True)
    visited_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    departed_at = models.DateTimeField(null=True, blank=True)
    photo = models.ImageField(upload_to="visitors/%Y/%m/%d/", blank=True, null=True)
    qr = models.ImageField(upload_to="qr/%Y/", blank=True, null=True)
    type_of_id = models.CharField(
        max_length=200,
        choices=TYPE_OF_ID,
        blank=True,
        null=True,
    )
    id_number = models.CharField(
        max_length=200,
        blank=True,
        null=True,
    )
    visit_type = models.CharField(max_length=10, choices=VISIT_CHOICES, null=True)

    remarks = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Visit to {self.organization} by {self.visitor}"

    class Meta:
        verbose_name = "Visitor"
        verbose_name_plural = "Visitors"
        ordering = ["-visited_at"]
        indexes = [
            models.Index(fields=["organization", "is_approved"]),
            models.Index(fields=["visited_at"]),
        ]

    def clean(self):
        if self.organization and not self.organization.is_organization:
            raise ValidationError(
                {
                    "organization": "organization is not an organization i.e is_organization is not set to true."
                }
            )
        if self.visitor and not self.visitor.is_visitor:
            raise ValidationError(
                {"visitor": "visitor is not visitor i.e is_visitor is not set to true."}
            )


@receiver(post_save, sender=OrganizationVisitHistory)
def create_qr_code_for_visitor(sender, instance, created, **kwargs):
    if created:
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
        qr.add_data(instance.id)
        qr.make(fit=True)
        img = BytesIO()
        qr.make_image(fill="black", back_color="white").save(img)
        instance.qr.save(f"{instance.mobile_number}-qrcode.png", img, save=True)


class BranchUserManager(BaseUserManager):

    def create_user(self, email, password=None, organization=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, organization=organization, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, organization=None, **extra_fields):
        extra_fields.setdefault("is_branch", True)

        return self.create_user(email, password, organization, **extra_fields)


class OrganizationBranch(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    organization = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, related_name="org_branches", null=True,
        db_index=True
    )
    name = models.CharField(max_length=200, null=True, blank=True)
    branch_no = models.CharField(max_length=10, null=True, blank=True)
    contact_person = models.CharField(max_length=200, null=True, blank=True)
    mobile_no = models.CharField(max_length=20, null=True, blank=True)
    country = models.CharField(max_length=100, null=True, blank=True)
    state = models.CharField(max_length=100, null=True, blank=True)
    district = models.CharField(max_length=100, null=True, blank=True)
    municipality = models.CharField(max_length=100, null=True, blank=True)
    city_village_area = models.CharField(max_length=100, null=True, blank=True)
    ward_no = models.CharField(max_length=10, null=True, blank=True)
    employee_size = models.CharField(max_length=200, null=True, blank=True)
    qr_image = models.ImageField(upload_to="branch_qr/%Y/", blank=True, null=True)
    LOCK_BRANCH_CHOICES = [
        ("Active", "Active"),
        ("Inactive", "Inactive"),
    ]

    lock_branch = models.CharField(
        max_length=100,
        choices=LOCK_BRANCH_CHOICES,
        default="Active",
    )

    objects = BranchUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["organization"]

    groups = models.ManyToManyField(
        "auth.Group",
        blank=True,
        related_name="organization_branch_groups",
        related_query_name="group",
    )

    user_permissions = models.ManyToManyField(
        "auth.Permission",
        blank=True,
        related_name="organization_branch_permissions",
        related_query_name="user_permission",
    )

    def __str__(self):
        return f"{self.organization} - {self.name}"

    class Meta:
        verbose_name = "Branch"
        verbose_name_plural = "Branches"
        unique_together = ("organization", "branch_no")


@receiver(post_save, sender=OrganizationBranch)
def create_qr_code_for_organization_branch(sender, instance, created, **kwargs):
    if created:
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
        qr.add_data(instance.id)
        qr.make(fit=True)
        img = BytesIO()
        qr.make_image(fill="black", back_color="white").save(img)
        instance.qr_image.save(f"{instance.mobile_no}-qrcode.png", img, save=True)


class OrganizationSocialMediaLink(BaseModel):
    organization = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="social_media_links",
        db_index=True
    )
    platform = models.CharField(max_length=50)
    link = models.URLField()

    def __str__(self):
        return f"{self.organization} - {self.platform}"

    class Meta:
        verbose_name = "Organization Social Media Link"
        verbose_name_plural = "Organization Social Media Links"


def upload_to_organization_document(instance, filename):
    extension = filename.split(".")[-1]
    unique_filename = f"{uuid.uuid4()}.{extension}"
    return f"documents/{unique_filename}"


class OrganizationDocument(BaseModel):
    organization = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="documents",
        db_index=True
    )
    name = models.CharField(max_length=200)
    file = models.FileField(upload_to=upload_to_organization_document)

    def __str__(self):
        return f"{self.organization} - {self.name}"

    class Meta:
        verbose_name = "Organization Document"
        verbose_name_plural = "Organization Documents"


class Device(BaseModel):
    DEVICE_TYPES = (
        ("android", "Android"),
        ("computer", "Computer"),
        ("other", "Other"),
    )

    name_of_device = models.CharField(max_length=255, null=True, blank=True)
    device_type = models.CharField(
        max_length=200, choices=DEVICE_TYPES, default="other", null=True, blank=True
    )
    organization = models.ForeignKey(
        User, related_name="devices", on_delete=models.CASCADE, null=True, blank=True,
        db_index=True
    )
    ip_address = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.name_of_device or "Unknown Device"

    class Meta:
        verbose_name = "Device"
        verbose_name_plural = "Devices"
        ordering = ["-created"]


class Purpose(BaseModel):
    """
    Stores predefined visit purposes that organizations can use.
    Note: Consider replacing with CharField choices in OrganizationVisitHistory in future.
    """
    text_field = models.TextField()

    def __str__(self):
        return self.text_field

    class Meta:
        verbose_name = "Purpose"
        verbose_name_plural = "Purposes"


class OrganizationContent(BaseModel):
    organization = models.OneToOneField(
        CustomUser, on_delete=models.CASCADE, related_name="content"
    )
    about_us = RichTextField(blank=True, null=True)
    privacy_policy = RichTextField(blank=True, null=True)
    terms_and_conditions = RichTextField(blank=True, null=True)
    faqs = RichTextField(blank=True, null=True)

    class Meta:
        verbose_name = "Organization Content"
        verbose_name_plural = "Organization Contents"


class AdsBanner(BaseModel):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to="ads_banners/")
    link_url = models.URLField()
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Ads Banner"
        verbose_name_plural = "Ads Banners"
        ordering = ["-created"]


class OrganizationFCMToken(BaseModel):
    organization = models.ForeignKey(
        User,
        related_name="fcm_tokens",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        db_index=True,
    )
    fcm_token = models.CharField(max_length=300, null=True, blank=True)

    def __str__(self):
        return self.fcm_token or "No Token"

    class Meta:
        verbose_name = "Organization FCM Token"
        verbose_name_plural = "Organization FCM Tokens"


class Guest(BaseModel):
    full_name = models.CharField(max_length=150)
    mobile_number = models.CharField(max_length=20)
    email = models.EmailField()
    num_adult_guests = models.PositiveIntegerField(blank=True, null=True)
    num_child_guests = models.PositiveIntegerField(blank=True, null=True)
    num_of_rooms = models.PositiveIntegerField(blank=True, null=True)
    type_of_id = models.CharField(max_length=200, blank=True, null=True)
    id_number = models.CharField(max_length=50, blank=True, null=True)
    advanced_payment = models.DecimalField(
        max_digits=10, decimal_places=2, blank=True, null=True
    )
    remaining_payment = models.DecimalField(
        max_digits=10, decimal_places=2, blank=True, null=True
    )
    checkout_date = models.DateField(blank=True, null=True)
    payment_method = models.CharField(max_length=100)
    organization = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name="guest_registrations",
        null=True,
        db_index=True,
    )

    def __str__(self):
        return self.full_name

    class Meta:
        verbose_name = "Guest"
        verbose_name_plural = "Guests"
        ordering = ["-created"]


class MeetingAppointment(BaseModel):
    full_name = models.CharField(max_length=150)
    meeting_title = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=20)
    location = models.CharField(max_length=100)
    meeting_type = models.CharField(max_length=50)
    date = models.DateField()
    organization = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name="meeting_registrations",
        null=True,
        db_index=True,
    )
    org_meet_id = models.ForeignKey(
        CustomUser,
        on_delete=models.SET_NULL,
        related_name="meeting_host",
        null=True,
        blank=True,
    )

    def __str__(self):
        return f"{self.full_name} - {self.meeting_title}"

    class Meta:
        verbose_name = "Meeting Appointment"
        verbose_name_plural = "Meeting Appointments"
        ordering = ["-date", "-created"]


class CustomerRegistration(BaseModel):
    full_name = models.CharField(max_length=150)
    mobile_number = models.CharField(max_length=20)
    email = models.EmailField()
    type_of_id = models.CharField(max_length=200)
    id_number = models.CharField(max_length=50)
    company_name = models.CharField(max_length=100)
    country = models.CharField(max_length=100, blank=True, null=True)
    state = models.CharField(max_length=100, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    additional_requirements = models.TextField(blank=True, null=True)
    organization = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name="customer_registrations",
        null=True,
        db_index=True,
    )

    def __str__(self):
        return self.full_name

    class Meta:
        verbose_name = "Customer Registration"
        verbose_name_plural = "Customer Registrations"
        ordering = ["-created"]
