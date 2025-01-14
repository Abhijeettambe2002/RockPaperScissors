from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login
from scores.models import Score


from django.shortcuts import render
from scores.models import Score
from django.contrib.auth.decorators import login_required


@login_required
def main_page(request):
    recent_score = None
    if request.user.is_authenticated:
        recent_score = Score.objects.filter(user=request.user).order_by("-id").first()
    return render(request, "main_pages.html", {"recent_score": recent_score})


from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login
from django.contrib import messages
from .forms import RegisterForm
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required


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


from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from scores.models import Score


# @login_required
# def score_submit(request):
#     if request.method == "POST":
#         score = request.POST.get("score")
#         score_value = int(score)
#         if score_value > 0:
#             Score.objects.create(user=request.user, score=score_value)
#             return redirect("leaderboard")
#         else:
#             return redirect("main_page")


from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages


@login_required
def score_submit(request):
    if request.method == "POST":
        score = request.POST.get("score")
        score_value = int(score)

        if score_value > 0:
            # Get user's highest existing score
            highest_score = (
                Score.objects.filter(user=request.user).order_by("-score").first()
            )

            if not highest_score:
                # If no existing score, create new record
                Score.objects.create(user=request.user, score=score_value)
            elif score_value > highest_score.score:
                # If new score is higher, update existing record
                highest_score.score = score_value
                highest_score.save()

        return redirect("login_page")
    return redirect("main_page")


def levels(request):
    return render(request, "levels.html")
