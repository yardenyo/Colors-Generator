import random

from rest_framework import status
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response

from generatecolors.models import Colors
from generatecolors.serializers import ColorsSerializer


@api_view(['GET'])
@renderer_classes([JSONRenderer])
def generate_new_color(request):
    random_color = get_random_color()
    new_color = persist_new_color(random_color)
    serializer = ColorsSerializer(new_color)
    return Response(serializer.data, status=status.HTTP_200_OK)


def persist_new_color(random_color):
    new_color = Colors(color=random_color)
    new_color.save()

    return new_color


def get_random_color():
    r = hex(random.randrange(0, 255))[2:]
    g = hex(random.randrange(0, 255))[2:]
    b = hex(random.randrange(0, 255))[2:]

    return '#' + r + g + b
