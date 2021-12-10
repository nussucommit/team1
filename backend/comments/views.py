from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response

from comments.models import Comments
from comments.serializers import CommentSerializer
# Create your views here.

@api_view(['Get'])
def get_comments_for_one_post(request, id):
    comments = Comments.objects.filter(pid=id)
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data)