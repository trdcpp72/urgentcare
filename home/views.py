from random import randrange

from django.http import HttpResponse
import googlemaps
import json
from django.views import View
from django.template.loader import render_to_string


# Location view for sending all data on behalf of latitude and longitude
from home.er_wait_watcher import ERWaitWatcher
from home.models import ERWaitTime, State


class LocationView(View):

    #get data in post method
    def post(self, request):

        if request.POST and request.is_ajax:

            service_type = request.POST.get('SelectedFacilityTypeCodes')
            latitude = request.POST.get('latitude')  # get data from form
            longitude = request.POST.get('longitude')  # get data from form
            state = None


            #initialize google map
            gmaps = googlemaps.Client(key='AIzaSyDelg2upOnLqRHIgrkIZ07T30RbxY3xZv4')#new key
            # gmaps = googlemaps.Client(key='AIzaSyBUxW2i1DpTxHksBHOB44M8QEOLQAF54Vg')  # old key
            locationData = (latitude, longitude)



            #get result from google api
            #map paeamere type='hospital'
            if service_type == "UC":
                keywords= "Urgent Cares"
            else:

                keywords = "Emergency Room"

                #If User select Emergency then we fetch state and get er wait time
                reverse = gmaps.reverse_geocode(locationData)
                for rows in reverse[0]['address_components']:
                    if rows['types'][0] == "administrative_area_level_1":
                        state = rows['long_name']



            gplace_result = None
            gplace_result = gmaps.places_nearby(location=locationData, keyword=keywords, radius=10000, type='hospital')

            #print(gplace_result)

            urgentcare_data = {}
            urgentcare_fdata = []


            if gplace_result['results'] == []:
                #no any action
                urgentcare_data['facilities'] = ""
                urgentcare_data['success'] = False
                urgentcare_data['message'] = "No Data"
            else:
                for rows in gplace_result['results']:

                    temp_data = {}

                    temp_data['name'] = rows['name']
                    temp_data['Id'] = rows['id']
                    temp_data['place_id'] = rows['place_id']

                    if 'rating' not in rows:
                        temp_data['rating'] = 0
                    else:
                      temp_data['rating'] = rows['rating']

                    temp_data['address'] = rows['vicinity']
                    temp_data['Latitude'] = rows['geometry']['location']['lat']
                    temp_data['Longitude'] = rows['geometry']['location']['lng']
                    if service_type == "UC":
                        temp_data['waittime'] = randrange(90)
                    else:

                        waittime = 0
                        state = State.objects.filter(state=state).first()

                        if state is not None:

                            waittimedata = ERWaitTime.objects.filter(er_name__icontains=rows['name'].lower(),state=state.id).first()
                            if waittimedata is not None:
                                waittime = waittimedata.waiting_time
                            else:
                                waittime = state.waiting_time
                                #waittime = waittime + randrange(6)




                        temp_data['waittime'] = waittime


                    urgentcare_fdata.append(temp_data)

                urgentcare_data['facilities'] = urgentcare_fdata
                urgentcare_data['service_type'] = service_type
                urgentcare_data['latitude'] = latitude
                urgentcare_data['longitude'] = longitude
                urgentcare_data['resetMapBounds'] = False
                urgentcare_data['success'] = True
                urgentcare_data['message'] = "Facilities mapped!"

            # return HttpResponse("true")
            return HttpResponse(json.dumps(urgentcare_data), content_type="application/json")


    #get wait time and location details in pages.
    def get(self, request):

         if request.GET and request.is_ajax:

             id = request.GET.get('Id') #get data from form
             place_id = request.GET.get('place_id')
             service_type = request.GET.get('service_type')
             latitude = request.GET.get('latitude')
             longitude = request.GET.get('longitude')

             #initilize google map
             gmaps = googlemaps.Client(key='AIzaSyDelg2upOnLqRHIgrkIZ07T30RbxY3xZv4')#new key
             #gmaps = googlemaps.Client(key='AIzaSyBUxW2i1DpTxHksBHOB44M8QEOLQAF54Vg')  # old key
             placeresult = gmaps.place(place_id=place_id)
             gplace_result = placeresult['result']

             ucare_data = {}
             ucare_data['id'] = id
             if service_type == "UC":
                 ucare_data['facility_type'] = "Urgent Care"
             else:
                 ucare_data['facility_type'] = "Emergency Room"

             #fetch result
             if gplace_result == "":
                 # no data found in
                 ucare_data['success'] = False
                 ucare_data['message'] = "No Data"
             else:

                 ucare_data['name'] = gplace_result['name']
                 # geting phone number
                 if 'formatted_phone_number' not in gplace_result:
                     ucare_data['phone_number'] = ""
                 else:
                     ucare_data['phone_number'] = gplace_result['formatted_phone_number']

                 # international_phone_number
                 if 'international_phone_number' not in gplace_result:
                     ucare_data['international_phone_number'] = ""
                 else:
                     ucare_data['international_phone_number'] = gplace_result['international_phone_number']

                 # get address
                 if 'formatted_address' not in gplace_result:
                     ucare_data['address'] = ""
                 else:
                     ucare_data['address'] = gplace_result['formatted_address']

                 # get website
                 if 'website' not in gplace_result:
                     ucare_data['website'] = ""
                 else:
                     ucare_data['website'] = gplace_result['website']

                 # get website
                 if 'url' not in gplace_result:
                     ucare_data['url'] = ""
                 else:
                     ucare_data['url'] = gplace_result['url']

                 # get website
                 if 'opening_hours' not in gplace_result:
                     ucare_data['periods'] = ""
                     ucare_data['open_now'] = ""
                     ucare_data['weekday_text'] = "na"
                 else:
                     ucare_data['periods'] = gplace_result['opening_hours']['periods']
                     ucare_data['open_now'] = gplace_result['opening_hours']['open_now']
                     ucare_data['weekday_text'] = gplace_result['opening_hours']['weekday_text']

                     ucare_data['Monday'] = gplace_result['opening_hours']['weekday_text'][0]
                     ucare_data['Tuesday'] = gplace_result['opening_hours']['weekday_text'][1]
                     ucare_data['Wednesday'] = gplace_result['opening_hours']['weekday_text'][2]
                     ucare_data['Thrusday'] = gplace_result['opening_hours']['weekday_text'][3]
                     ucare_data['Friday'] = gplace_result['opening_hours']['weekday_text'][4]
                     ucare_data['Saturday'] = gplace_result['opening_hours']['weekday_text'][5]
                     ucare_data['Sunday'] = gplace_result['opening_hours']['weekday_text'][6]

                 if 'rating' not in gplace_result:
                     ucare_data['rating'] = 0
                 else:
                     ucare_data['rating'] = gplace_result['rating']


         html = render_to_string('home/appointment_form.html', {'ucare_data': ucare_data})
         return HttpResponse(html)


class ScrapDataView(View):

    def get(self, request):
         #scrapp data from website
         #this function is run one time
         er = ERWaitWatcher()
         er.state_scrapper()
         html = render_to_string('home/thankyou.html')
         return HttpResponse(html)