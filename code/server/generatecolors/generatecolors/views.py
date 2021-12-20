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


@api_view(['GET'])
@renderer_classes([JSONRenderer])
def save_color(request):
    get_color = request.GET.get('string', '')
    new_color = persist_new_color(get_color)
    serializer = ColorsSerializer(new_color)
    return Response(serializer.data['color'], status=status.HTTP_200_OK)


def persist_new_color(given_color):
    new_color = Colors(color=given_color)
    new_color.save()

    return new_color


def get_random_color():
    r = random.randint(0, 255)
    g = random.randint(0, 255)
    b = random.randint(0, 255)

    return "{},{},{}".format(r, g, b)
