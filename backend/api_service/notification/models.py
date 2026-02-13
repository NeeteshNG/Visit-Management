from django.contrib.auth import get_user_model
from django.db import models

from common.models import BaseModel

from notification.choices import VISITOR_CHOICES, NOTIFICATION_TYPE_CHOICES

User = get_user_model()


class NotificationData(BaseModel):
    organization = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="organization_notifications",
        null=True,
        blank=True,
        db_index=True
    )
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='user_notifications',
        null=True,
        blank=True,
        db_index=True
    )
    notification_type = models.CharField(
        max_length=255,
        null=True,
        blank=True,
        choices=NOTIFICATION_TYPE_CHOICES
    )
    audience = models.CharField(
        max_length=255,
        null=True,
        blank=True,
        choices=VISITOR_CHOICES
    )
    title = models.CharField(
        max_length=255,
        null=True,
        blank=True
    )
    message = models.TextField(null=True, blank=True)
    attach_file = models.FileField(
        upload_to='attachments/',
        blank=True,
        null=True
    )
    is_seen = models.BooleanField(default=False)

    def __str__(self):
        return self.title if self.title else "No Title"

    class Meta:
        verbose_name = "Notification"
        verbose_name_plural = "Notifications"
        ordering = ["-created"]


class FCMPushNotification(BaseModel):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="fcm_push_notifications",
        db_index=True
    )
    title = models.CharField(max_length=200)
    body = models.JSONField()
    data = models.JSONField()

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "FCM Push Notification"
        verbose_name_plural = "FCM Push Notifications"
        ordering = ["-created"]
