from django.urls import path
from comments import views

urlpatterns = [
  path('comments/list', views.get_comments_for_one_post),
  path('comments/create', views.post_new_comment),
]