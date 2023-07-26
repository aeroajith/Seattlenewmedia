
from rest_framework.decorators import api_view,permission_classes

from rest_framework.response import Response

 
# Create your views here.
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated



@api_view(['GET'])
@permission_classes([IsAuthenticated])

def getData(request):
    content = {'message': 'Welcome to the JWT Authentication page using React Js and Django!'}
    return Response(content)






 