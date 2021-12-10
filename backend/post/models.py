from django.db import models

# Create your models here.
class Post(models.Model):
    id=models.BigAutoField(primary_key=True)
    title = models.TextField(blank=False)
    content = models.TextField(blank=False)
    poster = models.CharField(max_length=20, blank=False)
    date = models.DateTimeField(auto_now=True, auto_created=True)
    likes = models.PositiveIntegerField(default=0)
