from django.db import models
class User(models.Model):
    nombre = models.CharField(max_length=100)
#   perfil = models.ImageField(upload_to='fotos_de_perfil/', blank=True, null=True)
    creacion = models.DateField(blank=True, null=True)
    def __str__(self):
        return self.nombre
  
# Create your models here.

class Traduccion(models.Model):
    letra = models.TextField(unique=True)
    pronunciacion = models.CharField(max_length=100)
    traduccion = models.TextField()
    trazos = models.IntegerField()
    orden = models.IntegerField(default=100, unique=True)

    def __str__(self):
        return f"{self.letra} - {self.traduccion}"

class Katakana(models.Model):
    letra = models.TextField(unique=True)
    pronunciacion = models.CharField(max_length=100)
    traduccion = models.TextField(max_length=10)
    trazos = models.IntegerField()
    orden = models.IntegerField(unique=True)

    def __str__(self):
        return f"{self.letra} - {self.traduccion}"
    