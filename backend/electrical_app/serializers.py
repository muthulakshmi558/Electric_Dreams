from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import OTP

User = get_user_model()

class RequestOtpSerializer(serializers.Serializer):
    phone_number = serializers.CharField(max_length=15)

class VerifyOtpSerializer(serializers.Serializer):
    phone_number = serializers.CharField(max_length=15)
    code = serializers.CharField(max_length=6)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "phone_number", "email", "is_staff", "is_active", "created_at")

#commercialservice

from rest_framework import serializers
from .models import Service

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = "__all__"

#residentialservice

from rest_framework import serializers
from .models import ResidentialService

class ResidentialServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResidentialService
        fields = "__all__"

#contactform
from rest_framework import serializers
from .models import ContactMessage

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = "__all__"

#servicelist

from rest_framework import serializers
from .models import ServiceList

class ServiceListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceList
        fields = "__all__"

#servicedetails
from rest_framework import serializers
from .models import ServiceDetails

class ServiceDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceDetails
        fields = '__all__'

#callback
# calls/serializers.py
from rest_framework import serializers
from .models import CallbackRequest
import re

class CallbackRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = CallbackRequest
        fields = ("id", "name", "mobile", "email", "service", "message", "created_at")

    def validate_mobile(self, value):
        # basic check: digits only and length 7-15
        if not re.match(r'^\+?\d{7,15}$', value):
            raise serializers.ValidationError("Enter a valid mobile number (7-15 digits).")
        return value

#cart
from rest_framework import serializers
from .models import ServiceCartDetails

class ServiceCartSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceCartDetails
        fields = [
            "id",
            "title",
            "slug",
            "image",
            "price",
            "duration",
            "rating",
            "reviews",
            "short_description",
            "description",
            "visitation_offer_threshold",
        ]

from rest_framework import serializers
from .models import Order


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = [
            "service",
            "quantity",
            "amount",
            "customer_first_name",
            "customer_last_name",
            "email",
            "phone_number",
            "address",
            "service_date",
            "payment_method",
        ]
