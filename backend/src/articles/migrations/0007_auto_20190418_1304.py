# Generated by Django 2.2 on 2019-04-18 13:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0006_remove_workshoparticle_contact'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='workshoparticle',
            name='dateOfEvent',
        ),
        migrations.AddField(
            model_name='workshoparticle',
            name='contact',
            field=models.CharField(default='mmilicic@gmail.com', max_length=220),
        ),
    ]
