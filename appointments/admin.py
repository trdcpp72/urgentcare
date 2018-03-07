from django.contrib import admin

# Register your models here.


from appointments.models import Appointment, Feedback

# Register your models here.

@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('urgencare_name', 'urgentcare_phone', 'name', 'phone_number', 'gender', 'start_time')
    search_fields = ('urgencare_name','urgentcare_phone','name', 'phone_number')
    list_filter = ('name','phone_number','date_created')
    list_per_page = 20



@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
        list_display = ('email', 'description', 'date_created')
        search_fields = ('email',)
        list_filter = ('date_created',)
        list_per_page = 20

