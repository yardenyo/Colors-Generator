from django.db import models


class Colors(models.Model):
    id = models.AutoField(primary_key=True)
    color = models.CharField(max_length=25)
    creation_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '%s' % self.color
