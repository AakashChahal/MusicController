from django.urls import path
from .views import index, feedback_form

app_name = 'frontend'

urlpatterns = [
    path('', index, name=''),
    path('home', index),
    path('info', index),
    path('join', index),
    path('create', index),
    path('room/<str:roomCode>', index),
    path('feedback', feedback_form, name='form')
]
