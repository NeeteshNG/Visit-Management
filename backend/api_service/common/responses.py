"""
Standardized API response helpers for consistent response format.
All API responses should use these helpers for consistency.
"""

from rest_framework.response import Response
from rest_framework import status


class APIResponse:
    """
    Standard API response format:
    {
        "success": true/false,
        "message": "Human readable message",
        "data": {...} or [...],
        "errors": {...} or null
    }
    """

    @staticmethod
    def success(data=None, message="Success", status_code=status.HTTP_200_OK):
        """Return a successful response."""
        return Response(
            {
                "success": True,
                "message": message,
                "data": data,
                "errors": None,
            },
            status=status_code,
        )

    @staticmethod
    def created(data=None, message="Created successfully"):
        """Return a 201 created response."""
        return APIResponse.success(
            data=data, message=message, status_code=status.HTTP_201_CREATED
        )

    @staticmethod
    def error(message="An error occurred", errors=None, status_code=status.HTTP_400_BAD_REQUEST):
        """Return an error response."""
        return Response(
            {
                "success": False,
                "message": message,
                "data": None,
                "errors": errors,
            },
            status=status_code,
        )

    @staticmethod
    def not_found(message="Resource not found"):
        """Return a 404 not found response."""
        return APIResponse.error(
            message=message, status_code=status.HTTP_404_NOT_FOUND
        )

    @staticmethod
    def forbidden(message="Access denied"):
        """Return a 403 forbidden response."""
        return APIResponse.error(
            message=message, status_code=status.HTTP_403_FORBIDDEN
        )

    @staticmethod
    def unauthorized(message="Authentication required"):
        """Return a 401 unauthorized response."""
        return APIResponse.error(
            message=message, status_code=status.HTTP_401_UNAUTHORIZED
        )

    @staticmethod
    def validation_error(errors, message="Validation failed"):
        """Return a validation error response."""
        return APIResponse.error(
            message=message,
            errors=errors,
            status_code=status.HTTP_400_BAD_REQUEST,
        )

    @staticmethod
    def server_error(message="Internal server error"):
        """Return a 500 server error response."""
        return APIResponse.error(
            message=message,
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )

    @staticmethod
    def throttled(message="Too many requests. Please try again later."):
        """Return a 429 throttled response."""
        return APIResponse.error(
            message=message,
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
        )
