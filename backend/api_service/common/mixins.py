"""
Reusable mixins for common view patterns.
"""

import logging
from django.db.models import Q
from rest_framework.response import Response
from rest_framework import status

from .responses import APIResponse

logger = logging.getLogger(__name__)


class OrganizationOwnerMixin:
    """
    Mixin to ensure the user owns the organization resource.
    Use with views that need to verify organization ownership.
    """
    organization_field = 'organization'

    def get_organization_filter(self):
        """Return the filter for organization ownership."""
        return {self.organization_field: self.request.user}

    def check_organization_ownership(self, obj):
        """Check if the current user owns this organization resource."""
        org = getattr(obj, self.organization_field, None)
        if org is None:
            return False
        return org == self.request.user or self.request.user.is_admin


class VisitorOwnerMixin:
    """
    Mixin to ensure the user owns the visitor resource.
    """
    visitor_field = 'visitor'

    def get_visitor_filter(self):
        """Return the filter for visitor ownership."""
        return {self.visitor_field: self.request.user}

    def check_visitor_ownership(self, obj):
        """Check if the current user is the visitor."""
        visitor = getattr(obj, self.visitor_field, None)
        if visitor is None:
            return False
        return visitor == self.request.user or self.request.user.is_admin


class DateRangeFilterMixin:
    """
    Mixin to add date range filtering to views.
    Expects date_min and date_max query parameters.
    """
    date_field = 'created_at'

    def get_date_range_filter(self, queryset):
        """Apply date range filter to queryset."""
        from django.utils.dateparse import parse_date
        from datetime import timedelta

        date_from_param = self.request.query_params.get("date_min")
        date_to_param = self.request.query_params.get("date_max")

        date_from = parse_date(date_from_param) if date_from_param else None
        date_to = parse_date(date_to_param) if date_to_param else None

        if date_from and date_to:
            # Include the entire end day
            date_to = date_to + timedelta(days=1) - timedelta(microseconds=1)
            queryset = queryset.filter(
                **{f"{self.date_field}__range": [date_from, date_to]}
            )

        return queryset


class SearchFilterMixin:
    """
    Mixin to add search filtering to views.
    Define search_fields as a list of field names to search.
    """
    search_fields = []
    search_param = 'search'

    def get_search_filter(self, queryset):
        """Apply search filter to queryset."""
        search_query = self.request.query_params.get(self.search_param, "").strip()

        if not search_query or not self.search_fields:
            return queryset

        q_objects = Q()
        for field in self.search_fields:
            q_objects |= Q(**{f"{field}__icontains": search_query})

        return queryset.filter(q_objects)


class StandardResponseMixin:
    """
    Mixin to provide standard API responses.
    """

    def success_response(self, data=None, message="Success", status_code=status.HTTP_200_OK):
        """Return a standardized success response."""
        return APIResponse.success(data=data, message=message, status_code=status_code)

    def error_response(self, message="An error occurred", errors=None, status_code=status.HTTP_400_BAD_REQUEST):
        """Return a standardized error response."""
        return APIResponse.error(message=message, errors=errors, status_code=status_code)

    def created_response(self, data=None, message="Created successfully"):
        """Return a standardized created response."""
        return APIResponse.created(data=data, message=message)

    def not_found_response(self, message="Resource not found"):
        """Return a standardized not found response."""
        return APIResponse.not_found(message=message)


class PaginationMixin:
    """
    Mixin to handle pagination in API views.
    """

    def get_paginated_response(self, queryset, serializer_class):
        """Return paginated response for a queryset."""
        paginator = self.pagination_class()
        page = paginator.paginate_queryset(queryset, self.request)

        if page is not None:
            serializer = serializer_class(page, many=True)
            return paginator.get_paginated_response(serializer.data)

        serializer = serializer_class(queryset, many=True)
        return Response(serializer.data)


class VisitHistoryQueryMixin(DateRangeFilterMixin, SearchFilterMixin):
    """
    Combined mixin for visit history queries.
    Includes date range and search filtering with select_related optimization.
    """
    date_field = 'created_at'
    search_fields = [
        'visitor__full_name',
        'purpose',
        'full_name',
        'mobile_number',
        'vehicle_number',
        'visiting_from',
    ]

    def get_optimized_queryset(self, base_queryset):
        """
        Apply common optimizations and filters to visit history queryset.
        """
        queryset = base_queryset.select_related('organization', 'visitor')
        queryset = self.get_date_range_filter(queryset)
        queryset = self.get_search_filter(queryset)
        return queryset


class LoggingMixin:
    """
    Mixin to add logging capabilities to views.
    """

    def log_action(self, action, obj=None, extra=None):
        """Log an action performed by the user."""
        user = self.request.user
        user_id = user.id if user.is_authenticated else "Anonymous"
        view_name = self.__class__.__name__

        log_message = f"Action: {action} - View: {view_name} - User: {user_id}"

        if obj:
            log_message += f" - Object: {obj.__class__.__name__}({getattr(obj, 'id', 'N/A')})"

        if extra:
            log_message += f" - Extra: {extra}"

        logger.info(log_message)

    def log_error(self, error, context=None):
        """Log an error with context."""
        user = self.request.user
        user_id = user.id if user.is_authenticated else "Anonymous"
        view_name = self.__class__.__name__

        log_message = f"Error in {view_name} - User: {user_id} - Error: {error}"

        if context:
            log_message += f" - Context: {context}"

        logger.error(log_message)
