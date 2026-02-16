"""
Caching utilities for optimizing expensive operations.
"""

from functools import wraps
from django.core.cache import cache
from django.conf import settings


def get_cache_timeout(cache_type):
    """Get cache timeout from settings or use default."""
    timeouts = getattr(settings, 'CACHE_TIMEOUTS', {})
    return timeouts.get(cache_type, 300)  # Default 5 minutes


def cache_response(cache_key_prefix, timeout=None, cache_type=None):
    """
    Decorator to cache API response data.

    Usage:
        @cache_response('org_list', cache_type='organization_list')
        def get_queryset(self):
            return Organization.objects.all()
    """
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            # Build cache key
            cache_key = f"{cache_key_prefix}"

            # Try to get from cache
            cached_data = cache.get(cache_key)
            if cached_data is not None:
                return cached_data

            # Execute function and cache result
            result = func(*args, **kwargs)

            # Determine timeout
            cache_timeout = timeout
            if cache_timeout is None and cache_type:
                cache_timeout = get_cache_timeout(cache_type)
            if cache_timeout is None:
                cache_timeout = 300

            cache.set(cache_key, result, cache_timeout)
            return result
        return wrapper
    return decorator


def cache_queryset(cache_key, queryset, timeout=300):
    """
    Cache a queryset result.
    Returns cached data if available, otherwise evaluates and caches queryset.
    """
    cached_data = cache.get(cache_key)
    if cached_data is not None:
        return cached_data

    # Evaluate queryset to list for caching
    result = list(queryset)
    cache.set(cache_key, result, timeout)
    return result


def invalidate_cache(cache_key_pattern):
    """
    Invalidate cache by key or pattern.
    Note: Pattern deletion requires cache backend support.
    """
    cache.delete(cache_key_pattern)


def invalidate_organization_cache(organization_id):
    """Invalidate all caches related to an organization."""
    cache_keys = [
        f'org_visit_history_{organization_id}',
        f'org_branches_{organization_id}',
        f'org_visitor_counts_{organization_id}',
        f'org_kyc_{organization_id}',
    ]
    for key in cache_keys:
        cache.delete(key)


def invalidate_visitor_cache(visitor_id):
    """Invalidate all caches related to a visitor."""
    cache_keys = [
        f'visitor_history_{visitor_id}',
    ]
    for key in cache_keys:
        cache.delete(key)


class CacheKeys:
    """Centralized cache key definitions."""

    @staticmethod
    def organization_list():
        return 'organization_list'

    @staticmethod
    def organization_visit_history(org_id):
        return f'org_visit_history_{org_id}'

    @staticmethod
    def organization_branches(org_id):
        return f'org_branches_{org_id}'

    @staticmethod
    def organization_visitor_counts(org_id):
        return f'org_visitor_counts_{org_id}'

    @staticmethod
    def visitor_history(visitor_id):
        return f'visitor_history_{visitor_id}'

    @staticmethod
    def purpose_list():
        return 'purpose_list'

    @staticmethod
    def ads_banner_list():
        return 'ads_banner_list'
