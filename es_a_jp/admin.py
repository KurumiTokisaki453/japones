#Pegar esto en 'admin.py' de startapp django junto a models...
from django.contrib import admin
from .models import * 
admin.site.register(Traduccion)
