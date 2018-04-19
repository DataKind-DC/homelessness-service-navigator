
import requests
import pandas as pd

from django.db import migrations
from navigator.models import OrganizationInfo

from navigator.migrations.populate import SERVICES


def load_organizations(apps, schema_editor):

    url = 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/6/query?where=1%3D1&outFields=*&outSR=4326&f=json'

    api_url = url
    raw_data = requests.get(api_url)

    data_list = []
    for item in raw_data.json()['features']:
        data_list.append(item['attributes'])

    data_df = pd.DataFrame(data_list)

    for row in data_df.iterrows():
        data = row[1]
        service_list = [service for service in SERVICES
                        if data[service] and data[service].upper() == 'YES']

        org = OrganizationInfo(name=data['ORGANIZATION_NAME'].strip(),
                               phone_number=data['PHONE_NUMBER'],
                               url=data['WEBSITE_URL'],
                               street=data['STREET_ADDRESS'].strip(),
                               zipcode=data['ZIP'],
                               city=data['CITY'].upper().strip(),
                               state=data['STATE'].upper().strip(),
                               services=service_list
                               )
        org.save()


def delete_organizations(apps, schema_editor):
    OrganizationInfo.objects.all().delete()


class Migration(migrations.Migration):

    dependencies = [('navigator', '0001_auto_20180406_0038'), ]

    operations = [migrations.RunPython(load_organizations,
                                       delete_organizations), ]
