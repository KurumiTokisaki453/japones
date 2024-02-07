#Crear un archivo 'serializer.py' en StartApp (es_a_jp) para pegar:
from rest_framework import serializers
from .models import *

class TraduccionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Traduccion
        fields = '__all__'

