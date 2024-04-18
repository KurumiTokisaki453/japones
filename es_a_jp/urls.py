# Dentro de 'urls.py' de StartApp (es_a_jp):
from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from es_a_jp import views

traduccion = routers.DefaultRouter()
traduccion.register(r"es_a_jp", views.TraduccionView, "traduccion")

katakana = routers.DefaultRouter()
katakana.register(r"es_a_jp", views.KatakanaView, "katakana")

urlpatterns = [
    path("v1-traduccion/", include(traduccion.urls)),
    path("v2-katakana/", include(katakana.urls)),
    path("docs/", include_docs_urls(title="es_a_jp API")),
]