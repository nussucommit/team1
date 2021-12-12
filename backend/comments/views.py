from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from comments.models import Comments
from comments.serializers import CommentSerializer
# Create your views here.

@api_view(['Get'])
def get_comments_for_one_post(request):
    comments = Comments.objects.filter(pid=request.data["pid"])
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def post_new_comment(request):
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)