from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from api import views


urlpatterns = [
    url(r'^$', views.api_root),
    url(r'^services/$', views.ServiceList.as_view(), name='service-list'),
    url(r'^services/(?P<pk>[0-9]+)/$', views.ServiceDetail.as_view(), name='service-detail'),
]