from .views import ChangePasswordView, LogoutView, RegisterApi, authLogin
from django.urls import path

urlpatterns = [
    path('register', RegisterApi.as_view()),
    path('login', authLogin),
    path('logout', LogoutView.as_view()),
    path('change-password', ChangePasswordView.as_view())
]