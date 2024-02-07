# Dentro de 'urls.py' de StartApp (es_a_jp):
from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from es_a_jp import views

traduccion = routers.DefaultRouter()
traduccion.register(r"es_a_jp", views.TraduccionView, "traduccion")

urlpatterns = [
    path("v1-traduccion/", include(traduccion.urls)),
    path("docs/", include_docs_urls(title="es_a_jp API")),
]