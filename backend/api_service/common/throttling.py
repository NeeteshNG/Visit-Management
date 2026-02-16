"""
Custom throttling classes for rate limiting sensitive endpoints.
Protects against brute force attacks on authentication endpoints.
"""

from rest_framework.throttling import AnonRateThrottle, UserRateThrottle


class OTPRateThrottle(AnonRateThrottle):
    """
    Rate limit for OTP-related endpoints (verify, resend).
    Limits: 5 requests per minute per IP.
    """
    scope = 'otp'
    rate = '5/min'


class LoginRateThrottle(AnonRateThrottle):
    """
    Rate limit for login attempts.
    Limits: 10 requests per minute per IP.
    """
    scope = 'login'
    rate = '10/min'


class PasswordResetRateThrottle(AnonRateThrottle):
    """
    Rate limit for password reset requests.
    Limits: 3 requests per hour per IP.
    """
    scope = 'password_reset'
    rate = '3/hour'


class RegistrationRateThrottle(AnonRateThrottle):
    """
    Rate limit for user registration.
    Limits: 5 requests per hour per IP.
    """
    scope = 'registration'
    rate = '5/hour'


class BurstRateThrottle(UserRateThrottle):
    """
    General burst rate limit for authenticated users.
    Limits: 60 requests per minute.
    """
    scope = 'burst'
    rate = '60/min'


class SustainedRateThrottle(UserRateThrottle):
    """
    Sustained rate limit for authenticated users.
    Limits: 1000 requests per day.
    """
    scope = 'sustained'
    rate = '1000/day'
