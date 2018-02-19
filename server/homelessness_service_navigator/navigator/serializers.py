from rest_framework import serializers

from .models import Service

class ServiceSerializer(serializers.HyperlinkedModelSerializer):
    #user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Service
        fields = ('id', 'name', 'url')
        extra_kwargs = {
            'url': {
                'view_name': 'api:service-detail',
            }
        }