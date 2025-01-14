# scores/models.py
from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator


class Score(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    score = models.IntegerField(validators=[MinValueValidator(0)])

    def __str__(self):
        return str(self.score)
