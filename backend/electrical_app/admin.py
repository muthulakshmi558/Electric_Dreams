from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
from .models import User, OTP

# ✅ Custom User Admin
class UserAdmin(BaseUserAdmin):
    model = User
    list_display = ("phone_number", "email", "is_staff", "is_active", "created_at")
    list_filter = ("is_staff", "is_active", "is_superuser")
    search_fields = ("phone_number", "email")
    ordering = ("phone_number",)
    fieldsets = (
        (None, {"fields": ("phone_number", "password")}),
        (_("Personal info"), {"fields": ("email",)}),
        (_("Permissions"), {"fields": ("is_active", "is_staff", "is_superuser", "groups", "user_permissions")}),
        (_("Important dates"), {"fields": ("last_login", "created_at")}),
    )
    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": ("phone_number", "password1", "password2", "is_active", "is_staff", "is_superuser"),
        }),
    )

# ✅ OTP Admin
class OTPAdmin(admin.ModelAdmin):
    list_display = ("user", "code", "created_at", "is_verified")
    list_filter = ("is_verified", "created_at")
    search_fields = ("user__phone_number", "code")

# Register models
admin.site.register(User, UserAdmin)
admin.site.register(OTP, OTPAdmin)


#commercialservice
from django.contrib import admin
from .models import Service

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ("title", "description")

#residentialservice
from django.contrib import admin
from .models import ResidentialService

@admin.register(ResidentialService)
class ResidentialServiceAdmin(admin.ModelAdmin):
    list_display = ("title", "description")

#contactform
from django.contrib import admin
from .models import ContactMessage

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name", "email", "phone", "created_at")
    search_fields = ("first_name", "last_name", "email", "phone")
    list_filter = ("created_at",)

#servicelist
from django.contrib import admin
from .models import ServiceList

@admin.register(ServiceList)
class ServiceListAdmin(admin.ModelAdmin):
    list_display = ("title", "price", "duration", "rating", "reviews")

#serviceviewdetails

from django.contrib import admin
from .models import ServiceDetails

class ServiceDetailsAdmin(admin.ModelAdmin):
    list_display = ('title', 'short_description', 'price', 'duration', 'rating', 'reviews')
    search_fields = ('title', 'short_description')
    list_filter = ('rating',)

admin.site.register(ServiceDetails, ServiceDetailsAdmin)

#callback
# calls/admin.py
from django.contrib import admin
from .models import CallbackRequest

@admin.register(CallbackRequest)
class CallbackRequestAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "mobile", "email", "service", "created_at", "is_contacted")
    list_filter = ("service", "is_contacted", "created_at")
    search_fields = ("name", "mobile", "email")

#cart
from django.contrib import admin
from .models import ServiceCartDetails

@admin.register(ServiceCartDetails)
class ServiceCartAdmin(admin.ModelAdmin):
    list_display = ("title", "price", "rating", "reviews", "created_at")
    search_fields = ("title", "short_description")
    prepopulated_fields = {"slug": ("title",)}


#checkout
from django.contrib import admin
from .models import Order



@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'service', 'customer_first_name', 'amount', 'is_paid', 'service_date')
