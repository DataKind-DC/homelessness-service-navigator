from django.conf.urls import url
from api import views


urlpatterns = [
    url(r'^services/$', views.ServiceList.as_view(), name='service-list'),
    url(r'^services/(?P<pk>[0-9]+)/$', views.ServiceDetail.as_view(),
        name='service-detail'),
    url(r'^organizations/$', views.OrganizationList.as_view(),
        name='organization-list'),
    url(r'^organizations/(?P<pk>[0-9]+)/$', views.OrganizationDetail.as_view(),
        name='organization-detail')
]