# models.py
from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    # Aquí puedes agregar campos personalizados si los necesitas
    pass
