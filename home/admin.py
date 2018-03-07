from django.contrib import admin

# Register your models here.
from home.models import State, ERWaitTime


@admin.register(State)
class StateAdmin(admin.ModelAdmin):
        list_display = ('id', 'state', 'date_created')
        search_fields = ('state',)
        list_filter = ('date_created',)
        list_per_page = 25


@admin.register(ERWaitTime)
class ERWaitTimeAdmin(admin.ModelAdmin):
    list_display = ('er_name', 'waiting_time' ,'date_created')
    search_fields = ('er_name',)
    list_filter = ('date_created',)
    list_per_page = 20