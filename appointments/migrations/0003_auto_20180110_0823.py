# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-01-10 08:23
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appointments', '0002_auto_20180104_1122'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='facility_type',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='appointment',
            name='medical_problem',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='appointment',
            name='threatening_illnesses',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]