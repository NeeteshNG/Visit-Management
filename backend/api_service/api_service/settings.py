import os
from datetime import timedelta
from pathlib import Path
import firebase_admin
from firebase_admin import credentials
import environ
from django.templatetags.static import static
from django.urls import reverse_lazy
from django.utils.translation import gettext_lazy as _

env = environ.Env(
    DEBUG=(bool, False),
    SECRET_KEY=(str, ''),
    DB_NAME=(str, ''),
    DB_USER=(str, ''),
    DB_PASSWORD=(str, ''),
    EMAIL_HOST_USER=(str, ''),
    EMAIL_HOST_PASSWORD=(str, ''),
    SMS_SEND_API_URL=(str, ''),
    SMS_API_TOKEN=(str, ''),
    BASE_API_URL=(str, 'http://localhost:8000'),
)

BASE_DIR = Path(__file__).resolve().parent.parent

production = True

environ.Env.read_env(os.path.join(BASE_DIR, '.env'))

SECRET_KEY = env('SECRET_KEY')
DEBUG = env('DEBUG')
DATABASE_NAME = env('DB_NAME')
DATABASE_USER = env('DB_USER')
DATABASE_PASSWORD = env('DB_PASSWORD')
EMAIL_HOST_USER = env('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = env('EMAIL_HOST_PASSWORD')
SMS_SEND_API_URL = env('SMS_SEND_API_URL')
SMS_API_TOKEN = env('SMS_API_TOKEN')
BASE_API_URL = env('BASE_API_URL')

ALLOWED_HOSTS = env.list('ALLOWED_HOSTS', default=["localhost"])

INSTALLED_APPS = [
    "unfold",
    "unfold.contrib.filters",
    "unfold.contrib.forms",
    "unfold.contrib.inlines",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.staticfiles",
    "django.contrib.messages",
    "django.contrib.sessions",
    "django.contrib.admin",
    "rest_framework",
    "corsheaders",
    "drf_yasg",
    "django_filters",
    "rest_framework_simplejwt.token_blacklist",
    "organization",
    "user",
    "visitor",
    "notification",
    "staff_of_org",
    "ckeditor",
    "ckeditor_uploader",
    "fcm_django",
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "api_service.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [BASE_DIR / "templates"],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "api_service.wsgi.application"

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': DATABASE_NAME,
        'USER': DATABASE_USER,
        'PASSWORD': DATABASE_PASSWORD,
        'HOST': 'db',
        'PORT': 5432,
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

LANGUAGE_CODE = "en-us"
TIME_ZONE = "Asia/Kathmandu"
USE_I18N = True
USE_TZ = True

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ),
    'DEFAULT_FILTER_BACKENDS': [
        'django_filters.rest_framework.DjangoFilterBackend'
    ],
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.LimitOffsetPagination',
    'PAGE_SIZE': 10,
    'DEFAULT_THROTTLE_CLASSES': [
        'common.throttling.BurstRateThrottle',
        'common.throttling.SustainedRateThrottle',
    ],
    'DEFAULT_THROTTLE_RATES': {
        'otp': '5/min',
        'login': '10/min',
        'password_reset': '3/hour',
        'registration': '5/hour',
        'burst': '60/min',
        'sustained': '1000/day',
    },
    'EXCEPTION_HANDLER': 'common.exceptions.custom_exception_handler',
}

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=30),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=7),
    "ROTATE_REFRESH_TOKENS": True,
    "BLACKLIST_AFTER_ROTATION": True,
    "UPDATE_LAST_LOGIN": True,
    "ALGORITHM": "HS256",
    "SIGNING_KEY": SECRET_KEY,
    "VERIFYING_KEY": "",
    "AUDIENCE": None,
    "ISSUER": "ngtry",
    "JSON_ENCODER": None,
    "JWK_URL": None,
    "LEEWAY": 0,
    "AUTH_HEADER_TYPES": ("Bearer",),
}

AUTH_USER_MODEL = "user.CustomUser"

CORS_ALLOWED_ORIGINS = env.list('CORS_ALLOWED_ORIGINS', default=[
    "http://localhost:3002",
    "http://localhost:3000",
])

# Allow all origins in development
CORS_ALLOW_ALL_ORIGINS = env.bool('DEBUG', default=False)
CORS_ALLOW_CREDENTIALS = True

CSRF_TRUSTED_ORIGINS = env.list('CSRF_TRUSTED_ORIGINS', default=[
    "http://localhost:3000",
    "http://localhost:3002",
])

STATIC_URL = "/static/"
STATIC_ROOT = BASE_DIR / "static"

MEDIA_URL = "/media/"
MEDIA_ROOT = BASE_DIR / "media"

UNFOLD = {
    "SITE_TITLE": "NGtry Admin",
    "SITE_HEADER": "NGtry",
    "SITE_URL": "/",
    "SITE_LOGO": lambda request: static("ngtrylogo.png"),
    "SITE_SYMBOL": "apartment",
    "SITE_FAVICONS": [
        {
            "rel": "icon",
            "sizes": "32x32",
            "type": "image/png",
            "href": lambda request: static("favicon.png"),
        },
    ],
    "SHOW_HISTORY": True,
    "SHOW_VIEW_ON_SITE": False,
    "COLORS": {
        "base": {
            "50": "oklch(98% .003 100)",
            "100": "oklch(96% .005 100)",
            "200": "oklch(91% .008 100)",
            "300": "oklch(85% .012 100)",
            "400": "oklch(70% .018 100)",
            "500": "oklch(56% .022 100)",
            "600": "oklch(45% .025 100)",
            "700": "oklch(38% .028 100)",
            "800": "oklch(28% .025 100)",
            "900": "oklch(21% .022 100)",
            "950": "oklch(14% .018 100)",
        },
        "primary": {
            "50": "oklch(96% .025 120)",
            "100": "oklch(93% .045 120)",
            "200": "oklch(88% .070 120)",
            "300": "oklch(82% .090 118)",
            "400": "oklch(72% .110 115)",
            "500": "oklch(62% .100 112)",
            "600": "oklch(50% .090 110)",
            "700": "oklch(42% .080 108)",
            "800": "oklch(35% .065 106)",
            "900": "oklch(28% .050 104)",
            "950": "oklch(20% .035 102)",
        },
    },
    "SIDEBAR": {
        "show_search": True,
        "show_all_applications": False,
        "navigation": [
            {
                "title": _("Dashboard"),
                "items": [
                    {
                        "title": _("Dashboard"),
                        "icon": "dashboard",
                        "link": reverse_lazy("admin:index"),
                    },
                ],
            },
            {
                "title": _("Users"),
                "separator": True,
                "collapsible": False,
                "items": [
                    {
                        "title": _("Users"),
                        "icon": "group",
                        "link": reverse_lazy("admin:user_customuser_changelist"),
                    },
                    {
                        "title": _("Subscriptions"),
                        "icon": "card_membership",
                        "link": reverse_lazy("admin:user_subscription_changelist"),
                    },
                    {
                        "title": _("FCM Devices"),
                        "icon": "devices",
                        "link": reverse_lazy("admin:user_fcmdevices_changelist"),
                    },
                ],
            },
            {
                "title": _("Organization"),
                "separator": True,
                "collapsible": False,
                "items": [
                    {
                        "title": _("Organization KYC"),
                        "icon": "description",
                        "link": reverse_lazy("admin:organization_organizationkyc_changelist"),
                    },
                    {
                        "title": _("Visit History"),
                        "icon": "history",
                        "link": reverse_lazy("admin:organization_organizationvisithistory_changelist"),
                    },
                    {
                        "title": _("Branches"),
                        "icon": "apartment",
                        "link": reverse_lazy("admin:organization_organizationbranch_changelist"),
                    },
                    {
                        "title": _("Documents"),
                        "icon": "folder",
                        "link": reverse_lazy("admin:organization_organizationdocument_changelist"),
                    },
                    {
                        "title": _("Ads Banners"),
                        "icon": "campaign",
                        "link": reverse_lazy("admin:organization_adsbanner_changelist"),
                    },
                    {
                        "title": _("Devices"),
                        "icon": "tablet_mac",
                        "link": reverse_lazy("admin:organization_device_changelist"),
                    },
                    {
                        "title": _("Purposes"),
                        "icon": "label",
                        "link": reverse_lazy("admin:organization_purpose_changelist"),
                    },
                    {
                        "title": _("Guests"),
                        "icon": "person_add",
                        "link": reverse_lazy("admin:organization_guest_changelist"),
                    },
                    {
                        "title": _("Meeting Appointments"),
                        "icon": "event",
                        "link": reverse_lazy("admin:organization_meetingappointment_changelist"),
                    },
                    {
                        "title": _("Customer Registrations"),
                        "icon": "how_to_reg",
                        "link": reverse_lazy("admin:organization_customerregistration_changelist"),
                    },
                ],
            },
            {
                "title": _("Visitors"),
                "separator": True,
                "collapsible": False,
                "items": [
                    {
                        "title": _("Visitor KYC"),
                        "icon": "badge",
                        "link": reverse_lazy("admin:visitor_visitorkyc_changelist"),
                    },
                    {
                        "title": _("Visitor Messages"),
                        "icon": "chat",
                        "link": reverse_lazy("admin:visitor_visitorsmessage_changelist"),
                    },
                ],
            },
            {
                "title": _("Notifications"),
                "separator": True,
                "collapsible": False,
                "items": [
                    {
                        "title": _("Notifications"),
                        "icon": "notifications",
                        "link": reverse_lazy("admin:notification_notificationdata_changelist"),
                    },
                ],
            },
            {
                "title": _("Staff"),
                "separator": True,
                "collapsible": False,
                "items": [
                    {
                        "title": _("Staff Users"),
                        "icon": "badge",
                        "link": reverse_lazy("admin:staff_of_org_staffuser_changelist"),
                    },
                ],
            },
        ],
    },
}

CKEDITOR_UPLOAD_PATH = "uploads/"

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True

firebase_cred_path = BASE_DIR / "serviceAccountKey.json"
if firebase_cred_path.exists():
    cred = credentials.Certificate(firebase_cred_path)
    firebase_admin.initialize_app(cred)

# Cache Configuration
CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
        'LOCATION': 'unique-snowflake',
        'TIMEOUT': 300,  # 5 minutes default
        'OPTIONS': {
            'MAX_ENTRIES': 1000
        }
    }
}

# Cache timeouts for different data types (in seconds)
CACHE_TIMEOUTS = {
    'organization_list': 300,      # 5 minutes
    'visitor_stats': 60,           # 1 minute
    'purpose_list': 3600,          # 1 hour (rarely changes)
    'ads_banner_list': 600,        # 10 minutes
}

# Logging Configuration
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'verbose': {
            'format': '{levelname} {asctime} {module} {process:d} {thread:d} {message}',
            'style': '{',
        },
        'simple': {
            'format': '{levelname} {asctime} {module} {message}',
            'style': '{',
        },
        'json': {
            'format': '{"level": "%(levelname)s", "time": "%(asctime)s", "module": "%(module)s", "message": "%(message)s"}',
        },
    },
    'filters': {
        'require_debug_false': {
            '()': 'django.utils.log.RequireDebugFalse',
        },
        'require_debug_true': {
            '()': 'django.utils.log.RequireDebugTrue',
        },
    },
    'handlers': {
        'console': {
            'level': 'INFO',
            'class': 'logging.StreamHandler',
            'formatter': 'simple',
        },
        'file': {
            'level': 'WARNING',
            'class': 'logging.handlers.RotatingFileHandler',
            'filename': BASE_DIR / 'logs' / 'ngtry.log',
            'maxBytes': 10485760,  # 10 MB
            'backupCount': 5,
            'formatter': 'verbose',
        },
        'security_file': {
            'level': 'WARNING',
            'class': 'logging.handlers.RotatingFileHandler',
            'filename': BASE_DIR / 'logs' / 'security.log',
            'maxBytes': 10485760,  # 10 MB
            'backupCount': 10,
            'formatter': 'verbose',
        },
    },
    'loggers': {
        'django': {
            'handlers': ['console'],
            'level': 'INFO',
            'propagate': True,
        },
        'django.security': {
            'handlers': ['console', 'security_file'],
            'level': 'WARNING',
            'propagate': False,
        },
        'organization': {
            'handlers': ['console', 'file'],
            'level': 'INFO',
            'propagate': False,
        },
        'visitor': {
            'handlers': ['console', 'file'],
            'level': 'INFO',
            'propagate': False,
        },
        'user': {
            'handlers': ['console', 'file'],
            'level': 'INFO',
            'propagate': False,
        },
        'common': {
            'handlers': ['console', 'file'],
            'level': 'INFO',
            'propagate': False,
        },
    },
    'root': {
        'handlers': ['console'],
        'level': 'INFO',
    },
}
