# Generated by Django 2.2 on 2019-04-18 13:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0004_auto_20190418_1301'),
    ]

    operations = [
        migrations.AlterField(
            model_name='workshoparticle',
            name='dateOfEvent',
            field=models.DateTimeField(default='2019-10-22 10:00'),
        ),
    ]