
from rest_framework import status,generics, permissions, mixins
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import login, update_session_auth_hash, authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth.models import User
from .serializer import RegisterSerializer, UserSerializer #, ChangePasswordSerializer
from datetime import datetime, timedelta
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

import jwt
from django.conf import settings
# from users.auth_backend import PasswordlessAuthBackend
from rest_framework_simplejwt.tokens import RefreshToken

class UserView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer(queryset)

    def retrieve(self, request, pk=None):
        """
        If provided 'pk' is "me" then return the current user.
        """
        if request.user and pk == 'me':
            return Response(UserSerializer(request.user).data)
        return super(UserView, self).retrieve(request, pk)

# Register API
class RegisterApi(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
        "message": "Registration successful. You may now login"
        })

@api_view(['POST'])
def authLogin(request):
  username = request.data['username']
  password = request.data['password']
  user = authenticate(username=username, password=password)
  if user is not None:
    login(request, user)
    return Response({"username": user.username, "token": get_tokens_for_user(user)}, status=status.HTTP_200_OK)
  return Response(status=status.HTTP_401_UNAUTHORIZED)

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }