import requests
import pandas as pd

api_url = 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/6/query?where=1%3D1&outFields=*&outSR=4326&f=json'
raw_data = requests.get(api_url)

data_list = []
for item in raw_data.json()['features']:
    data_list.append(item['attributes'])

data_df = pd.DataFrame(data_list)