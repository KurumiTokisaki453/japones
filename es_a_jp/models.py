from django.db import models

# Create your models here.

class Traduccion(models.Model):
    letra = models.TextField(unique=True)
    pronunciacion = models.CharField(max_length=100)
    traduccion = models.TextField()
    trazos = models.IntegerField()

    def __str__(self):
        return f"{self.letra} - {self.traduccion}"
