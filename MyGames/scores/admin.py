from django.contrib import admin
from .models import Score


class ScoreAdmin(admin.ModelAdmin):
    list_display = ("user", "score")


admin.site.register(Score, ScoreAdmin)

# Register your models here.
