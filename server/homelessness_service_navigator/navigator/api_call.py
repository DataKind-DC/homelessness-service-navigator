import requests
import pandas as pd

api_url = 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/6/query?where=1%3D1&outFields=*&outSR=4326&f=json'
raw_data = requests.get(api_url)

data_list = []
for item in raw_data.json()['features']:
    data_list.append(item['attributes'])

data_df = pd.DataFrame(data_list)

""""[
'ACCESSIBILITY_SERVICES', 
'ADULT_LITERACY', 
'ART_THERAPY', 
'ASSESSMENT',
 'BORROW_MATERIALS', 
 'CASE_MANAGEMENT', 
 'CHILD_CARE', 
 'CITY',
'CLIENTS_SERVED_PER_DAY',
'CLOTHING', 
'COMPUTERS', 
'DENTAL_SERVICES',
'DESCRIPTION', 
'DOCUMENTATION_ASSISTANCE', 
'DOMESTIC_VIOLENCE_SERVICES',
'FOOD_GROCERIES', 
'GROUPS', 
'HAIRCUTS', 
'HARM_REDUCTION', 
'HIV_TESTING',
'HOURS_OF_OPERATION', 
'HOUSING', 
'HOUSING_NAVIGATION',
'INCOME_TAX_HELP', 
'LATITUDE', 
'LAUNDRY', 
'LEGAL_SERVICES',
'LGBTQ_FOCUSED', 
'LIBRARY_CARD', 
'LONGITUDE',
'MAIL', 
'MARID', 
'MEALS',
'MEDICAL_BENEFITS', 
'MEDICAL_SERVICES', 
'MENTAL_HEALTH', 
'MINISTRY',
'OBJECTID', 
'OPEN_TO_PUBLIC', 
'ORGANIZATION_NAME', 
'PHONE',
'PHONE_NUMBER', 
'PROGRAM_NAME', 
'PUBLIC_RESTROOMS',
'RECORD_LAST_UPDATED', 
'REFRESHMENTS', 
'SHOWERS', 
'SNAP_FOOD_STAMPS',
'STATE', 
'STORAGE', 
'STREET_ADDRESS',
'SUBSTANCE_ABUSE_TREATMENT',
'SUPPORTED_EMPLOYMENT', 
'TANF_FINANCIAL_ASSISTANCE', 
'TARGET',
'TRANSPORTATION', 
'VOCATIONAL_TRAINING', 
'WARD', 
'WEBSITE_URL',
'XCOORD', 
'YCOORD', 
'ZIP']
"""

services=['ACCESSIBILITY_SERVICES', 
          'ADULT_LITERACY', 
          'ART_THERAPY', 
          'ASSESSMENT',
          'BORROW_MATERIALS', 
          'CASE_MANAGEMENT', 
          'CHILD_CARE', 
          'CLOTHING', 
          'COMPUTERS', 
          'DENTAL_SERVICES', 
          'DOCUMENTATION_ASSISTANCE', 
          'DOMESTIC_VIOLENCE_SERVICES',
          'FOOD_GROCERIES', 
          'GROUPS', 
          'HAIRCUTS', 
          'HARM_REDUCTION', 
          'HIV_TESTING',
          'HOUSING', 
          'HOUSING_NAVIGATION',
          'INCOME_TAX_HELP', 
          'LAUNDRY', 
          'LEGAL_SERVICES',
          'LGBTQ_FOCUSED', 
          'LIBRARY_CARD', 
          'MAIL', 
          'MEALS',
          'MEDICAL_BENEFITS', 
          'MEDICAL_SERVICES', 
          'MENTAL_HEALTH', 
          'MINISTRY',
          'PHONE',
          'PUBLIC_RESTROOMS', 
          'REFRESHMENTS', 
          'SHOWERS', 
          'SNAP_FOOD_STAMPS', 
          'STORAGE', 
          'SUBSTANCE_ABUSE_TREATMENT',
          'SUPPORTED_EMPLOYMENT', 
          'TANF_FINANCIAL_ASSISTANCE', 
          'TRANSPORTATION', 
          'VOCATIONAL_TRAINING', 
          ]



"""
 pd.unique(data_df['TARGET'])
Out[24]:
array(['Men & Women', None, 'Youth', 'Women ', 'Children', 'Individuals',
       'Women', 'Men', 'Families'], dtype=object)
"""
#pd.unique(data_df['ORGANIZATION_NAME'])
print(data_df)