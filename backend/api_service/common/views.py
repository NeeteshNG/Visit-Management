from django.db import connection
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny

from .responses import APIResponse


class HealthCheckView(APIView):
    """
    Health check endpoint for load balancers and monitoring.
    Returns 200 if the service is healthy, 503 if unhealthy.
    """
    permission_classes = [AllowAny]
    authentication_classes = []

    def get(self, request):
        health_status = {
            "status": "healthy",
            "database": "connected",
        }

        # Check database connection
        try:
            with connection.cursor() as cursor:
                cursor.execute("SELECT 1")
        except Exception as e:
            health_status["status"] = "unhealthy"
            health_status["database"] = "disconnected"
            return APIResponse.error(
                message="Service unhealthy",
                errors=health_status,
                status_code=503,
            )

        return APIResponse.success(data=health_status, message="Service healthy")


class ReadinessCheckView(APIView):
    """
    Readiness check endpoint for Kubernetes readiness probes.
    Returns 200 if the service is ready to accept traffic.
    """
    permission_classes = [AllowAny]
    authentication_classes = []

    def get(self, request):
        return APIResponse.success(
            data={"ready": True},
            message="Service ready",
        )


class ResponseMixin:
    response_serializer_class = None

    def get_response_serializer(self, *args, **kwargs):
        response_serializer_class = self.response_serializer_class()
        kwargs['context'] = self.get_serializer_context()
        return response_serializer_class(*args, **kwargs)

    def get_response_serializer_class(self):
        assert self.response_serializer_class is not None, (
                "'%s' should either include a 'response_serializer_class attribute or"
                "or override the get_response_serializer method." % self.__class__.__name__
        )

        return self.response_serializer_class
