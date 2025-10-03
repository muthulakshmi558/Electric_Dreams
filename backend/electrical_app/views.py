import random
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status, viewsets
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken
from .models import OTP
from .serializers import UserSerializer

User = get_user_model()

class AuthViewSet(viewsets.ViewSet):
    # Send OTP
    @action(detail=False, methods=["post"])
    def send_otp(self, request):
        phone = request.data.get("phone_number")
        if not phone:
            return Response({"error": "Phone number required"}, status=400)

        user, _ = User.objects.get_or_create(phone_number=phone)
        otp_code = str(random.randint(100000, 999999))
        OTP.objects.create(user=user, code=otp_code)

        # TODO: integrate SMS API
        return Response({"message": "OTP sent", "otp": otp_code}, status=200)

    # Verify OTP -> return JWT token
    @action(detail=False, methods=["post"])
    def verify_otp(self, request):
        phone = request.data.get("phone_number")
        otp_code = request.data.get("otp")

        try:
            user = User.objects.get(phone_number=phone)
            otp_obj = OTP.objects.filter(user=user, code=otp_code, is_verified=False).last()
            if otp_obj:
                otp_obj.is_verified = True
                otp_obj.save()

                # Generate JWT
                refresh = RefreshToken.for_user(user)
                return Response({
                    "message": "Login success",
                    "user": UserSerializer(user).data,
                    "refresh": str(refresh),
                    "access": str(refresh.access_token),
                })
            return Response({"error": "Invalid OTP"}, status=400)
        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=404)

    # Logout (invalidate refresh token manually if needed)
    @action(detail=False, methods=["post"])
    def logout(self, request):
        return Response({"message": "Logged out successfully"})

#commercialservice
from rest_framework import viewsets
from .models import Service
from .serializers import ServiceSerializer

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

#residentialservice
from rest_framework import viewsets
from .models import ResidentialService
from .serializers import ResidentialServiceSerializer

class ResidentialServiceViewSet(viewsets.ModelViewSet):
    queryset = ResidentialService.objects.all()
    serializer_class = ResidentialServiceSerializer

#contactform

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail, EmailMultiAlternatives
from django.template.loader import render_to_string
from .models import ContactMessage
from .serializers import ContactMessageSerializer
from django.conf import settings

class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all().order_by("-created_at")
    serializer_class = ContactMessageSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            contact = serializer.save()

            # Send email to admin
            subject_admin = "New Contact Form Submission"
            message_admin = f"New message from {contact.first_name} {contact.last_name}\n\n{contact.message}"
            send_mail(subject_admin, message_admin, settings.DEFAULT_FROM_EMAIL, [settings.DEFAULT_FROM_EMAIL])

            # Send confirmation email to user
            subject_user = "Thank you for contacting us!"
            html_content = render_to_string("emails/contact_confirmation.html", {"contact": contact})
            email_user = EmailMultiAlternatives(subject_user, "", settings.DEFAULT_FROM_EMAIL, [contact.email])
            email_user.attach_alternative(html_content, "text/html")
            email_user.send()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#servicelist
from rest_framework import viewsets
from .models import ServiceList
from .serializers import ServiceListSerializer

class ServiceListViewSet(viewsets.ModelViewSet):
    queryset = ServiceList.objects.all()
    serializer_class = ServiceListSerializer

#servicedetails

from rest_framework import viewsets
from .models import ServiceDetails
from .serializers import ServiceDetailsSerializer

class ServiceDetailsViewSet(viewsets.ModelViewSet):
    queryset = ServiceDetails.objects.all()
    serializer_class = ServiceDetailsSerializer

#callback

# calls/views.py
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import CallbackRequest
from .serializers import CallbackRequestSerializer
from .methods import send_callback_emails

class CallbackRequestViewSet(viewsets.ModelViewSet):
    queryset = CallbackRequest.objects.all().order_by("-created_at")
    serializer_class = CallbackRequestSerializer
    http_method_names = ["get", "post", "head", "options"]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        instance = serializer.save()
        try:
            send_callback_emails(instance)
        except Exception as e:
            # log error but still return success since saved
            print("Email send failed:", e)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

#cart
from rest_framework import viewsets
from .models import ServiceCartDetails
from .serializers import ServiceCartSerializer
from rest_framework.permissions import AllowAny

class ServiceCartViewSet(viewsets.ModelViewSet):
    queryset = ServiceCartDetails.objects.all().order_by("-created_at")
    serializer_class = ServiceCartSerializer
    permission_classes = [AllowAny]


#orders
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Service, Order
from .serializers import OrderSerializer



class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    @action(detail=False, methods=['post'])
    def create_order(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(is_paid=True)  # for demo assume payment always succeeds
        return Response({"success": True, "order": serializer.data})
