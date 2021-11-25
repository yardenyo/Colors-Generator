from rest_framework import serializers

from generatecolors.models import Colors


class ColorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Colors
        fields = ['id', 'color', 'creation_date']
