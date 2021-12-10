from django.db import models
from post.models import Post

# Create your models here.
class Comments(models.Model):
    pid = models.ForeignKey(Post, on_delete=models.CASCADE)
    content = models.TextField(blank=False)
    date = models.DateTimeField(auto_now=True, auto_created=True)
    commenter = models.CharField(max_length=20)
    likes = models.PositiveIntegerField(default=0)
