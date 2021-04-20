from django.urls import path
from .views import index, register

app_name = 'frontend'

urlpatterns = [
    path('', index, name=''),
    path('register', register),
    path('home', index),
    path('info', index),
    path('join', index),
    path('create', index),
    path('room/<str:roomCode>', index)
]
