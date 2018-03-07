from django.db import models

# Create your models here.


class State (models.Model):

    state = models.CharField(max_length=255, null=False, blank=False)
    waiting_time = models.CharField(max_length=50, null=False, blank=False)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "{}".format(self.state)


class ERWaitTime (models.Model):

    state = models.ForeignKey(State)
    er_name = models.CharField(max_length=200, null=False, blank=False)
    waiting_time = models.CharField(max_length=50, null=False, blank=False)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "{}".format(self.er_name)


