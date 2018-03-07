"""urgentcare URL Configuration
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url


from home.views import LocationView, ScrapDataView

urlpatterns = [
    url(r'^geturgentcare/', LocationView.as_view(), name='get_urgent_care'),
    url(r'^urgentcaredatails', LocationView.as_view(), name='urgent_care_details'),
    url(r'^scrappdata', ScrapDataView.as_view(), name='scrapp_data')
]
