from rest_framework import serializers

from .models import Service, OrganizationInfo


class ServiceSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Service
        fields = ('id', 'name', 'url')
        extra_kwargs = {
            'url': {
                'view_name': 'api:service-detail',
            }
        }


class OrganizationSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrganizationInfo
        fields = ('id', 'name', 'url', 'phone_number', 'street', 'zipcode',
                  'city', 'state', 'services')
