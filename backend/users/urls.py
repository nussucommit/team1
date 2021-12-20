from .views import RegisterApi, authLogin
from django.urls import path

urlpatterns = [
    path('register', RegisterApi.as_view()),
    path('login', authLogin)
]