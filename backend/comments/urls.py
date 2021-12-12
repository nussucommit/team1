from django.urls import path
from comments import views

urlpatterns = [
  path('comments/list', views.get_comments_for_one_post),
  path('comments/create', views.post_new_comment),
  path('comments/delete', views.delete_a_post),
  path('comments/update', views.edit_a_comment),
]