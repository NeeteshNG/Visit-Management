import re
import html

from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


# Maximum lengths for common fields
MAX_NAME_LENGTH = 200
MAX_EMAIL_LENGTH = 254
MAX_MOBILE_LENGTH = 20
MAX_TEXT_LENGTH = 5000
MAX_URL_LENGTH = 2048


def sanitize_string(value, max_length=MAX_TEXT_LENGTH):
    """
    Sanitize a string input by:
    - Stripping whitespace
    - Escaping HTML entities
    - Truncating to max length
    """
    if value is None:
        return None
    if not isinstance(value, str):
        value = str(value)

    # Strip whitespace
    value = value.strip()

    # Escape HTML entities to prevent XSS
    value = html.escape(value)

    # Truncate to max length
    if len(value) > max_length:
        value = value[:max_length]

    return value


def validate_name(name, field_name="Name"):
    """Validate a name field."""
    if not name:
        raise ValidationError(
            _(f"{field_name} is required."),
            code='required'
        )

    if len(name) > MAX_NAME_LENGTH:
        raise ValidationError(
            _(f"{field_name} must be less than {MAX_NAME_LENGTH} characters."),
            code='max_length'
        )

    # Check for suspicious patterns (potential injection)
    suspicious_patterns = [
        r'<script',
        r'javascript:',
        r'on\w+\s*=',
        r'data:text/html',
    ]

    for pattern in suspicious_patterns:
        if re.search(pattern, name, re.IGNORECASE):
            raise ValidationError(
                _(f"Invalid characters in {field_name}."),
                code='invalid_characters'
            )

    return sanitize_string(name, MAX_NAME_LENGTH)


def validate_email_format(email):
    """Validate email format and length."""
    if not email:
        return None

    if len(email) > MAX_EMAIL_LENGTH:
        raise ValidationError(
            _("Email must be less than 254 characters."),
            code='max_length'
        )

    # Basic email regex
    email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    if not re.match(email_pattern, email):
        raise ValidationError(
            _("Invalid email format."),
            code='invalid_email'
        )

    return email.lower().strip()


def validate_mobile_number(mobile_number):
    """
    Global phone number validation.
    Accepts phone numbers from multiple countries.
    Basic validation: 7-15 digits, allows common prefixes.
    """
    # Remove any spaces, dashes, or country code prefix
    cleaned_number = re.sub(r'[\s\-\+]', '', str(mobile_number))

    # Remove common country code prefixes for validation
    if cleaned_number.startswith('00'):
        cleaned_number = cleaned_number[2:]

    # Basic international phone validation (7-15 digits)
    if not re.match(r'^\d{7,15}$', cleaned_number):
        raise ValidationError(
            _("Invalid mobile number. Please enter 7-15 digits."),
            code='invalid_mobile_number'
        )
