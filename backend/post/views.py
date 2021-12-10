from django.shortcuts import render
from rest_framework import serializers

from rest_framework.decorators import api_view
from rest_framework.response import Response

from post.models import Post
from post.serializer import PostSerializer

# Create your views here.
@api_view(['GET'])
def get_all_post(request):
    resultSet = Post.objects.all()
    serializer = PostSerializer(resultSet, many=True)
    return Response(serializer.data)