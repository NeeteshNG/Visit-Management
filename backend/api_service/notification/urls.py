from django.urls import path
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    NotificationDataViewSet,
    NotificationDetailAPIView,
    OrganizationNotificationNotificationCountView,
    CreateNotificationView,
    RegisterUserDeviceView,
)

from .views import OrganizationNotificationList

router = DefaultRouter()
router.register(
    r"notificationdata", NotificationDataViewSet, basename="notificationdata"
)

urlpatterns = [
    path("", include(router.urls)),
    path(
        "<int:organization_id>/list",
        OrganizationNotificationList.as_view(),
        name="organization_list",
    ),
    path(
        "<int:organization_id>/notifications-count",
        OrganizationNotificationNotificationCountView.as_view(),
        name="organization_notification_count",
    ),
    path(
        "<int:organization_id>/notifications-create",
        CreateNotificationView.as_view(),
        name="organization_notification_create",
    ),
    path(
        "<int:notification_id>/detail",
        NotificationDetailAPIView.as_view(),
        name="notification_detail_view",
    ),
    path(
        "register-device", RegisterUserDeviceView.as_view(), name="register-user-device"
    ),
]
