from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

from common.views import HealthCheckView, ReadinessCheckView

schema_view = get_schema_view(
    openapi.Info(
        title="NGtry API",
        default_version="v1",
        description="NGtry Visit Management API",
        terms_of_service="https://www.ngtry.com/policies/terms/",
        contact=openapi.Contact(email="contact@ngtry.com"),
        license=openapi.License(name="NGtry Private License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    # Health check endpoints
    path("health/", HealthCheckView.as_view(), name="health-check"),
    path("ready/", ReadinessCheckView.as_view(), name="readiness-check"),
    # API endpoints
    path("organization/", include("organization.urls")),
    path("user/", include("user.urls")),
    path("visitor/", include("visitor.urls")),
    path("staff/", include("staff_of_org.urls")),
    path("notification/", include("notification.urls")),
    path(
        "api-docs<format>/",
        schema_view.without_ui(cache_timeout=0),
        name="schema-json",
    ),
    path(
        "api-docs/",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
    path("redoc/", schema_view.with_ui("redoc", cache_timeout=0), name="schema-redoc"),
    path("admin/", admin.site.urls),
]

urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
