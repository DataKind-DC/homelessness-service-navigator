from rest_framework import generics

from navigator.models import Service, OrganizationInfo
from navigator.serializers import ServiceSerializer, OrganizationSerializer


class ServiceList(generics.ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


class ServiceDetail(generics.RetrieveAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


class OrganizationList(generics.ListAPIView):
    serializer_class = OrganizationSerializer

    def get_queryset(self):
        queryset = OrganizationInfo.objects.all()

        org_name = self.request.query_params.get('name', None)
        location_state = self.request.query_params.get('state', None)
        zip5 = self.request.query_params.get('zipcode', None)
        org_services = self.request.query_params.get('services', None)

        if org_name:
            queryset &= queryset.filter(name=org_name)
        if location_state:
            queryset &= queryset.filter(state=location_state)
        if zip5 and zip5.isdigit():
            queryset &= queryset.filter(zipcode=int(zip5))
        if org_services:
            org_services_list = org_services.upper().split(',')
            queryset &= queryset.filter(services__overlap=org_services_list)
        return queryset


class OrganizationDetail(generics.RetrieveAPIView):
    queryset = OrganizationInfo.objects.all()
    serializer_class = OrganizationSerializer
