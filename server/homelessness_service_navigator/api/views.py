from django.shortcuts import render

# Create your views here.

from navigator.models import Service
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from navigator.serializers import ServiceSerializer

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
       'api': reverse('api:service-list', request=request, format=format),
    })


class ServiceList(generics.ListCreateAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
 
    #def perform_create(self, serializer):
    #    serializer.save(user=self.request.user)
 
 
class ServiceDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ServiceSerializer
 
    def get_queryset(self):
        return Service.objects.all()#.filter(user=self.request.user)