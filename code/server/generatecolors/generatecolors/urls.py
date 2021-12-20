from django.contrib import admin
from django.urls import path

from generatecolors import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/colors/generate-new-color', views.generate_new_color),
    path('api/colors/make-color', views.save_color),
]
