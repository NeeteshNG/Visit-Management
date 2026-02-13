import re

from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


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
