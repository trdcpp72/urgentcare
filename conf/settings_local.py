# Database
# https://docs.djangoproject.com/en/1.11/ref/settings/#databases

ALLOWED_HOSTS = ['ec2-13-57-29-108.us-west-1.compute.amazonaws.com', '13.57.29.108', '127.0.0.1']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'UrgentCareDB',
        'USER': 'trd',
        'PASSWORD': 'Nazli1234',
        'HOST': 'urgentcaredb.czmb0cmtjgnm.us-west-1.rds.amazonaws.com',
        'PORT': '5432'
    }
}