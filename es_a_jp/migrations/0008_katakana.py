# Generated by Django 5.0.1 on 2024-02-10 16:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('es_a_jp', '0007_alter_traduccion_orden'),
    ]

    operations = [
        migrations.CreateModel(
            name='Katakana',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('letra', models.TextField(unique=True)),
                ('pronunciacion', models.CharField(max_length=100)),
                ('traduccion', models.TextField(max_length=10)),
                ('trazos', models.IntegerField()),
                ('orden', models.IntegerField(unique=True)),
            ],
        ),
    ]
