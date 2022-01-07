from django.conf import settings
from django.db import models

# Create your models here.
class Post(models.Model):
    id=models.BigAutoField(primary_key=True)
    title = models.TextField(blank=False)
    content = models.TextField(blank=False)
    poster = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,)
    date = models.DateTimeField(auto_now=True, auto_created=True)
    likes = models.PositiveIntegerField(default=0)
