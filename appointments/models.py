from __future__ import unicode_literals

# Create your models here.
from django.db import models
from django.utils.html import format_html
from django.contrib import admin


class Appointment (models.Model):


    urgentcare_id = models.CharField(max_length=200, null=False, blank=False, db_index=True)
    urgencare_name = models.CharField(max_length=255, null=False, blank=False)
    urgentcare_address = models.CharField(max_length=255, null=False, blank=False)
    urgentcare_phone = models.CharField(max_length=20, null=False, blank=False)
    name = models.CharField(max_length=100, null=False, blank=False)
    family_name = models.CharField(max_length=100, null=True, blank=True, db_index=True)
    phone_number = models.CharField(max_length=15, null=True, blank=True)
    gender = models.CharField(max_length=50, null=True, blank=True)
    age = models.PositiveIntegerField(null=False, blank=False,default=0)
    brief_explanations = models.CharField(max_length=500, null=True, blank=True)
    threatening_illnesses = models.CharField(max_length=100, null=True, blank=True)
    medical_problem = models.CharField(max_length=100, null=True, blank=True)
    facility_type = models.CharField(max_length=50, null=True, blank=True)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    status = models.PositiveSmallIntegerField(db_index=False, default=1)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return format_html(
            #'<span style="color: #{};">{} {}</span>',
            self.urgencare_name,
            self.urgentcare_address,
            self.name,
            self.phone_number,
            self.gender,
            self.start_time
        )

    # def __str__(self):
    #     return "{}".format(self.name)


class Feedback (models.Model):

    email = models.CharField(max_length=255, null=False, blank=False)
    liked = models.CharField(max_length=50, null=False, blank=False)
    description = models.CharField(max_length=1050, null=False, blank=False)
    status = models.PositiveSmallIntegerField(db_index=False, default=1)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now_add=True)

    #display fields in admin
    def __str__(self):
        return format_html(
            #'<span style="color: #">{} {}</span>',
            self.email,
            self.description,
            self.date_created,
        )

