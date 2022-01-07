from django.urls import path
from post import views

urlpatterns = [
  path('posts/list', views.show_all_posts),
  path('posts/create', views.create_new_post),
  path('posts/delete', views.delete_a_post),
  path('posts/update', views.update_a_post),
  path('posts/get-like', views.get_like),
  path('posts/like-post', views.like_post)
]