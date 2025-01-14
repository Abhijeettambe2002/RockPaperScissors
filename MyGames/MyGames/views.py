from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm
from scores.models import Score
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login
from django.contrib import messages
from .forms import RegisterForm
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required


@login_required
def main_page(request):
    recent_score = None
    if request.user.is_authenticated:
        recent_score = Score.objects.filter(user=request.user).order_by("-id").first()
    return render(request, "main_pages.html", {"recent_score": recent_score})


def register(request):
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save(commit=True)
            login(request, user)
            return redirect("main_page")
    else:
        form = RegisterForm()
    return render(request, "index.html", {"form": form})


def login_page(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect("main_page")
    return render(request, "login_page.html")


def logout_page(request):
    logout(request)
    return redirect("login_page")


def leaderboard(request):
    scores = Score.objects.all().order_by("-score")
    return render(request, "score_board.html", {"scores": scores})


@login_required
def score_submit(request):
    if request.method == "POST":
        score = request.POST.get("score")
        score_value = int(score)

        if score_value > 0:
            highest_score = (
                Score.objects.filter(user=request.user).order_by("-score").first()
            )

            if not highest_score:
                Score.objects.create(user=request.user, score=score_value)
            elif score_value > highest_score.score:
                highest_score.score = score_value
                highest_score.save()

        return redirect("login_page")
    return redirect("main_page")
