# Generated by Django 3.2.9 on 2021-11-25 16:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Colors',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('color', models.CharField(max_length=25)),
                ('creation_date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
