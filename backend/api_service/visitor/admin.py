from django.contrib import admin
from unfold.admin import ModelAdmin as UnfoldModelAdmin

from .models import VisitorKYC, VisitorsMessage
from common.admin import CustomModelAdmin


class VisitorKYCAdmin(UnfoldModelAdmin):
    list_display = ['name', 'user', 'gender', 'marital_status', 'nationality', 'occupation', 'highest_education']
    list_filter = ['name', 'user__full_name', 'user__organization_name', 'email_address']
    search_fields = ['name', 'user__full_name', "nationality", 'user__organization_name', 'email_address']
    ordering = ['name', 'user__organization_name', 'nationality', 'occupation', 'highest_education']
    list_per_page = 20


admin.site.register(VisitorKYC, VisitorKYCAdmin)


@admin.register(VisitorsMessage)
class VisitorMessage(CustomModelAdmin):
    list_display = ['visitor']
