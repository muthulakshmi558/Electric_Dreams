# calls/methods.py
from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives
from django.conf import settings

def send_callback_emails(callback_obj):
    """
    Sends an HTML confirmation mail to the user and an admin notification mail.
    callback_obj is an instance of CallbackRequest.
    """
    user_context = {
        "name": callback_obj.name,
        "service": callback_obj.service,
        "mobile": callback_obj.mobile,
        "email": callback_obj.email,
        "date": callback_obj.created_at,
    }
    admin_context = {
        "name": callback_obj.name,
        "service": callback_obj.service,
        "mobile": callback_obj.mobile,
        "email": callback_obj.email,
        "message": getattr(callback_obj, "message", ""),
        "date": callback_obj.created_at,
    }

    # User confirmation email
    user_subject = "We received your request - we'll call you shortly"
    user_html = render_to_string("emails/callback_user.html", user_context)
    user_msg = EmailMultiAlternatives(user_subject, "", settings.DEFAULT_FROM_EMAIL, [callback_obj.email])
    user_msg.attach_alternative(user_html, "text/html")
    user_msg.send(fail_silently=False)

    # Admin notification email
    admin_subject = f"New callback request from {callback_obj.name}"
    admin_html = render_to_string("emails/callback_admin.html", admin_context)
    admin_msg = EmailMultiAlternatives(admin_subject, "", settings.DEFAULT_FROM_EMAIL, [settings.ADMIN_EMAIL])
    admin_msg.attach_alternative(admin_html, "text/html")
    admin_msg.send(fail_silently=False)
