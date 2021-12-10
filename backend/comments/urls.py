from django.urls import path
from comments import views

urlpatterns = [
  path('comments/pid=<str:id>', views.get_comments_for_one_post),
]