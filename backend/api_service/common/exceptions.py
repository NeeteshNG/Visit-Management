"""
Custom exception handling for consistent API error responses.
"""

import logging
from rest_framework.views import exception_handler
from rest_framework.exceptions import (
    APIException,
    ValidationError,
    NotFound,
    PermissionDenied,
    AuthenticationFailed,
    NotAuthenticated,
    Throttled,
)
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

from .responses import APIResponse

logger = logging.getLogger(__name__)


def custom_exception_handler(exc, context):
    """
    Custom exception handler that returns consistent API responses.
    """
    # Get the view and request for logging context
    view = context.get('view', None)
    request = context.get('request', None)

    # Log the exception
    log_exception(exc, view, request)

    # Handle Django's Http404
    if isinstance(exc, Http404):
        return APIResponse.not_found(message=str(exc) or "Resource not found")

    # Handle Django's ObjectDoesNotExist
    if isinstance(exc, ObjectDoesNotExist):
        return APIResponse.not_found(message="Resource not found")

    # Handle DRF's NotFound
    if isinstance(exc, NotFound):
        return APIResponse.not_found(message=str(exc.detail))

    # Handle authentication errors
    if isinstance(exc, NotAuthenticated):
        return APIResponse.unauthorized(message="Authentication credentials were not provided")

    if isinstance(exc, AuthenticationFailed):
        return APIResponse.unauthorized(message=str(exc.detail))

    # Handle permission errors
    if isinstance(exc, PermissionDenied):
        return APIResponse.forbidden(message=str(exc.detail))

    # Handle throttling
    if isinstance(exc, Throttled):
        wait_time = exc.wait
        message = f"Request was throttled. Try again in {int(wait_time)} seconds."
        return APIResponse.throttled(message=message)

    # Handle validation errors
    if isinstance(exc, ValidationError):
        return APIResponse.validation_error(
            errors=exc.detail,
            message="Validation failed"
        )

    # Handle generic API exceptions
    if isinstance(exc, APIException):
        return APIResponse.error(
            message=str(exc.detail),
            status_code=exc.status_code
        )

    # For unhandled exceptions, let DRF's default handler process it
    # but wrap it in our response format
    response = exception_handler(exc, context)

    if response is not None:
        return APIResponse.error(
            message="An error occurred",
            errors=response.data,
            status_code=response.status_code
        )

    # For truly unhandled exceptions, return 500
    logger.exception("Unhandled exception: %s", exc)
    return APIResponse.server_error(message="An unexpected error occurred")


def log_exception(exc, view, request):
    """Log exception with context information."""
    view_name = view.__class__.__name__ if view else "Unknown"
    method = request.method if request else "Unknown"
    path = request.path if request else "Unknown"
    user = getattr(request, 'user', None)
    user_id = user.id if user and user.is_authenticated else "Anonymous"

    # Determine log level based on exception type
    if isinstance(exc, (NotFound, Http404, ObjectDoesNotExist)):
        logger.info(
            "Not found: %s %s - View: %s - User: %s",
            method, path, view_name, user_id
        )
    elif isinstance(exc, (NotAuthenticated, AuthenticationFailed)):
        logger.warning(
            "Auth error: %s %s - View: %s - User: %s - Error: %s",
            method, path, view_name, user_id, str(exc)
        )
    elif isinstance(exc, PermissionDenied):
        logger.warning(
            "Permission denied: %s %s - View: %s - User: %s",
            method, path, view_name, user_id
        )
    elif isinstance(exc, Throttled):
        logger.warning(
            "Throttled: %s %s - View: %s - User: %s",
            method, path, view_name, user_id
        )
    elif isinstance(exc, ValidationError):
        logger.info(
            "Validation error: %s %s - View: %s - User: %s - Errors: %s",
            method, path, view_name, user_id, str(exc.detail)
        )
    elif isinstance(exc, APIException):
        logger.warning(
            "API error: %s %s - View: %s - User: %s - Error: %s",
            method, path, view_name, user_id, str(exc)
        )
    else:
        logger.error(
            "Unhandled error: %s %s - View: %s - User: %s - Error: %s",
            method, path, view_name, user_id, str(exc),
            exc_info=True
        )


class ServiceUnavailable(APIException):
    """Custom exception for service unavailable errors."""
    status_code = status.HTTP_503_SERVICE_UNAVAILABLE
    default_detail = "Service temporarily unavailable"
    default_code = "service_unavailable"


class ConflictError(APIException):
    """Custom exception for conflict errors (e.g., duplicate resources)."""
    status_code = status.HTTP_409_CONFLICT
    default_detail = "Resource conflict"
    default_code = "conflict"


class BadRequestError(APIException):
    """Custom exception for bad request errors."""
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = "Bad request"
    default_code = "bad_request"
