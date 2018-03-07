

from django.http import HttpResponse
import json

from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

from appointments.models import Appointment, Feedback
from django.views import View
import datetime


# Create View For Save Appointment Forms
@method_decorator(csrf_exempt, name='dispatch')
class AppointmentView(View):
    model = Appointment

    # get appointment data from appointment form and save in database

    def post(self, request):
        if request.POST and request.is_ajax:


            currenttime = datetime.datetime.now()
            after10min = currenttime + datetime.timedelta(minutes=10)

            appform = Appointment()
            appform.urgentcare_id = request.POST.get('urgentcare_id')
            appform.urgencare_name = request.POST.get('urgencare_name')
            appform.urgentcare_address = request.POST.get('urgentcare_address')
            appform.name = request.POST.get('name')
            appform.family_name = request.POST.get('family_name')
            appform.phone_number = request.POST.get('phone_number')
            appform.gender = request.POST.get('gender')
            appform.age = request.POST.get('age')
            appform.brief_explanations = request.POST.get('brief_explanations')
            appform.threatening_illnesses = request.POST.get('threatening_illnesses')
            appform.facility_type = request.POST.get('facility_type')
            appform.medical_problem = request.POST.get('medical_problem')
            appform.urgentcare_phone = request.POST.get('urgentcare_phone')
            appform.start_time =  currenttime
            appform.end_time = after10min
            appform.save()

            res_data = {}
            res_data['success'] = 'true'
            res_data['message'] = 'Your appointment has been submitted! Thank you.'
            res_data['title'] = 'Appointment Submitted'

            return HttpResponse(json.dumps(res_data), content_type="application/json")





# Create View For Save Feedback Forms
class FeedbackView(View):

    model = Feedback

    # get feedback data from feedback form and save in database
    def post(self, request):
        if request.POST and request.is_ajax:

            #form = Feedback(request.POST)
            feedbackform = Feedback()
            feedbackform.email = request.POST.get('Email')
            feedbackform.liked = request.POST.get('Liked')
            feedbackform.description = request.POST.get('Comments')
            feedbackform.save()

            res_data = {}
            res_data['success'] = 'true'
            res_data['message'] = 'Your feedback has been submitted! Thank you.'
            res_data['title'] = 'Feedback Submitted'

            return HttpResponse(json.dumps(res_data), content_type="application/json")
