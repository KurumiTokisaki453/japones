# Generated by Django 5.0.1 on 2024-02-09 21:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('es_a_jp', '0006_alter_traduccion_orden'),
    ]

    operations = [
        migrations.AlterField(
            model_name='traduccion',
            name='orden',
            field=models.IntegerField(default=100, unique=True),
        ),
    ]