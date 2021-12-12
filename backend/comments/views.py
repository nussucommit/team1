from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Max
import datetime

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
    temp = Comments.objects.filter(pid=request.data["pid"])

    if temp.count() == 0:
        request.data["cid"] = 1
    else:
        request.data["cid"] = temp.aggregate(Max('cid'))['cid__max'] + 1
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['Delete'])
def delete_a_post(request):
    delete_comment = Comments.objects.filter(pid = request.data["pid"], cid = request.data["cid"])
    if not(delete_comment):
        return Response(status=status.HTTP_400_BAD_REQUEST)  
    data = CommentSerializer(delete_comment, many = True).data
    delete_comment.delete()
    return Response(data, status=status.HTTP_200_OK)

@api_view(['PUT'])
def edit_a_comment(request):
    try:
        update_object = Comments.objects.get(pid = request.data["pid"], cid = request.data["cid"])
    except:
        return Response("Such comment does not exist", status=status.HTTP_400_BAD_REQUEST)

    
    if "content" in request.data:
        if not (request.data["content"]):
            return Response("comment cannot be empty",status=status.HTTP_400_BAD_REQUEST)
        update_object.content = request.data["content"]
    
    update_object.date = datetime.datetime.now()
    update_object.save()
    return Response(CommentSerializer(update_object).data,status=status.HTTP_201_CREATED)