import os
from datetime import timedelta
from pathlib import Path
import firebase_admin
from firebase_admin import credentials
import environ

env = environ.Env(
    DEBUG=(bool, False),
    SECRET_KEY=(str, ''),
    DB_NAME=(str, ''),
    DB_USER=(str, ''),
    DB_PASSWORD=(str, ''),
    EMAIL_HOST_USER=(str, ''),
    EMAIL_HOST_PASSWORD=(str, ''),
    SMS_SEND_API_URL=(str, ''),
    SMS_API_TOKEN=(str, '')
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

ALLOWED_HOSTS = env.list('ALLOWED_HOSTS', default=["localhost"])

INSTALLED_APPS = [
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.staticfiles",
    "django.contrib.messages",
    "django.contrib.sessions",
    "jazzmin",
    "django.contrib.admin",
    "rest_framework",
    "corsheaders",
    "drf_yasg",
    "django_filters",
    "organization",
    "user",
    "visitor",
    "notification",
    "staff_of_org",
    "ckeditor",
    "ckeditor_uploader",
    'fcm_django',
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.security.SecurityMiddleware",
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
}

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=50),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=1),
    "ROTATE_REFRESH_TOKENS": False,
    "BLACKLIST_AFTER_ROTATION": False,
    "UPDATE_LAST_LOGIN": False,
    "ALGORITHM": "HS256",
    "SIGNING_KEY": SECRET_KEY,
    "VERIFYING_KEY": "",
    "AUDIENCE": None,
    "ISSUER": None,
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

JAZZMIN_SETTINGS = {
    "theme": "darkly",
    "site_title": "NGtry Admin",
    "site_header": "NGtry",
    "site_brand": "NGtry",
    "site_logo": "ngtrylogo.png",
    "login_logo": "ngtrylogo.png",
    "login_logo_dark": None,
    "site_logo_classes": "p-0 shadow-none",
    "site_icon": "ngtrylogo.png",
    "welcome_sign": "Welcome to NGtry",
    "copyright": "NGtry",
    "user_avatar": None,
    "topmenu_links": [
        {"name": "Home", "url": "admin:index"}
    ],
    "show_sidebar": True,
    "navigation_expanded": True,
    "hide_apps": [],
    "hide_models": [],
    "order_with_respect_to": ["user", "organization", "visitor"],
    "icons": {
        "user.CustomUser": "fas fa-users",
        "organization.OrganizationBranch": "fas fa-building",
        "organization.OrganizationDocument": "fas fa-file",
        "organization.OrganizationVisitHistory": "fas fa-users",
        "organization.OrganizationKYC": "fas fa-solid fa-file",
        "organization.OrganizationSocialMediaLink": "fas fa-hashtag",
        "visitor.VisitorKYC": "fas fa-glasses",
        "notification.Notification": "fas fa-flag",
    },
    "default_icon_parents": "fas fa-chevron-circle-right",
    "default_icon_children": "fas fa-chevron-circle-right fa-xs ",
    "related_modal_active": False,
    "custom_css": None,
    "custom_js": None,
    "use_google_fonts_cdn": True,
    "show_ui_builder": True,
    "changeform_format": "horizontal_tabs",
    "changeform_format_overrides": {
        "user.CustomUserModel": "collapsible",
        "organization.OrganizationKYC": "collapsible",
        "organization.OrganizationVisitHistory": "collapsible",
        "organization.OrganizationBranch": "collapsible",
        "organization.OrganizationSocialMediaLink": "collapsible",
        "organization.OrganizationDocument": "collapsible",
        "visitor.VisitorKYC": "collapsible",
    },
    "language_chooser": False,
}

JAZZMIN_UI_TWEAKS = {
    "navbar_small_text": False,
    "footer_small_text": False,
    "body_small_text": True,
    "brand_small_text": False,
    "brand_colour": False,
    "accent": "accent-primary",
    "navbar": "navbar-purple navbar-dark",
    "no_navbar_border": True,
    "navbar_fixed": True,
    "layout_boxed": False,
    "footer_fixed": False,
    "sidebar_fixed": True,
    "sidebar": "sidebar-light-indigo",
    "sidebar_nav_small_text": False,
    "sidebar_disable_expand": True,
    "sidebar_nav_child_indent": True,
    "sidebar_nav_compact_style": False,
    "sidebar_nav_legacy_style": False,
    "sidebar_nav_flat_style": True,
    "theme": "cosmo",
    "dark_mode_theme": None,
    "button_classes": {
        "primary": "btn-primary",
        "secondary": "btn-secondary",
        "info": "btn-outline-info",
        "warning": "btn-warning",
        "danger": "btn-danger",
        "success": "btn-success",
    },
    "actions_sticky_top": False,
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
