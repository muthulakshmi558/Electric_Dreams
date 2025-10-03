from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AuthViewSet,ServiceViewSet,ContactMessageViewSet,ServiceListViewSet,ResidentialServiceViewSet,CallbackRequestViewSet,ServiceCartViewSet,OrderViewSet

router = DefaultRouter()
router.register("auth", AuthViewSet, basename="auth")

router.register(r'services', ServiceViewSet)
router.register(r'residentialservices', ResidentialServiceViewSet)

router.register(r'contacts', ContactMessageViewSet, basename="contacts")
router.register(r'serviceslist', ServiceListViewSet, basename="serviceslist")
router.register(r'servicesdetailslist', ServiceViewSet, basename='servicesdetailslist')
router.register(r"callback", CallbackRequestViewSet, basename="callback")
router.register(r"servicescartlist", ServiceCartViewSet, basename="servicescartlist")
router.register(r'orders', OrderViewSet)


urlpatterns = [
    path("api/", include(router.urls)),
]
