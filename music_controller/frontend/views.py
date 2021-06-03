from .forms import FeedbackForm
from django.shortcuts import render

# Create your views here.


def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')


def feedback_form(request):
    if request.method == 'POST':
        form = FeedbackForm(request.POST)

        if form.is_valid():
            form.save()
            return render(request, 'frontend/thanks.html')
    else:
        form = FeedbackForm()
    return render(request, 'frontend/feedback_form.html', {'feedback_form': form})
