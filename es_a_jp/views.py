# from django.shortcuts import render

# Create your views here.
#En 'views.py' de StartApp (es_a_jp) importamos los modelos, serializados, y rest_framework:
from rest_framework import viewsets
from .serializer import *
from .models import *

class TraduccionView(viewsets.ModelViewSet):
    serializer_class = TraduccionSerializer
    queryset = Traduccion.objects.all()
