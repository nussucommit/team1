from rest_framework import generics, serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from post.models import Post
from post.serializer import PostSerializer
import datetime
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.contrib.auth import authenticate

# Create your views here.
class get_all_post(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

@api_view(['Get'])
def show_all_posts(request):
    queryset = Post.objects.all()
    serializer = PostSerializer(queryset, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['Post'])
def create_new_post(request):
    if request.user:
        data = {'title': request.data['title'], 'content': request.data['content'], 'poster': request.user.id}
        serializer = PostSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(status= status.HTTP_400_BAD_REQUEST)
    return Response(status= status.HTTP_401_UNAUTHORIZED)

@api_view(['Delete'])
def delete_a_post(request):
    if request.user:
        target = Post.objects.filter(poster = request.user.id).filter(id = request.data["id"])
        if not(target):
            return Response(status=status.HTTP_400_BAD_REQUEST)
    
        target.delete()
        return Response(status=status.HTTP_200_OK)
    return Response(status=status.HTTP_401_UNAUTHORIZED)

@api_view(['PUT'])
def update_a_post(request):
    if request.user:
        update_object = Post.objects.get(id = request.data["id"])
        if not update_object or update_object['poster'] != request.user.id:
            return Response(status=status.HTTP_400_BAD_REQUEST)
    
        if "content" in request.data:
            if not (request.data["content"]):
                return Response("content cannot be empty",status=status.HTTP_400_BAD_REQUEST)
            update_object.content = request.data["content"]
    
        if "title" in request.data:
            if not (request.data["title"]):
                return Response("title cannot be empty",status=status.HTTP_400_BAD_REQUEST)
            update_object.title = request.data["title"]
        update_object.date = datetime.datetime.now()
        update_object.save()
        return Response(PostSerializer(update_object).data,status=status.HTTP_201_CREATED)
    return Response(status=status.HTTP_401_UNAUTHORIZED)