from django.contrib import admin
from unfold.admin import ModelAdmin as UnfoldModelAdmin


# Register your models here.
class CustomModelAdmin(UnfoldModelAdmin):
    def changelist_view(self, request, extra_context=None):
        response = super().changelist_view(request, extra_context=extra_context)
        try:
            qs = response.context_data['cl'].queryset
            count = qs.count()
            response['total_count'] = count
            response.context_data['total_count'] = count
        except (AttributeError, KeyError):
            pass
        return response
