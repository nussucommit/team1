from django.urls import path
from post import views

urlpatterns = [
  path('posts/', views.get_all_post),
]