from django.db import models

# Create your models here.



class Service(models.Model):
    name = models.CharField(max_length=255)


class Category(models.Model):
    name = models.CharField(max_length=255)


class Organization(models.Model):
    service = models.ForeignKey(Service)
    #category_id = models.IntegerField() # Was this an attempt at an index
    hour_open = models.DateTimeField()
    hour_closed = models.DateTimeField()


class OrganizationInfo(models.Model):
    organization = models.ForeignKey(Organization)
    name = models.CharField(max_length=255)
    url = models.TextField()
    phone_number = models.TextField()
    street = models.TextField()
    zipcode = models.IntegerField()
    city = models.TextField(max_length=40)
    state = models.TextField(max_length=40)


# saving to use with GeoDjango
# class Location(models.Model):
#     organization = models.ForeignKey(Organization)
#     latitude = models.DecimalField(max_digits=7, decimal_places=4)
#     longitude = models.DecimalField(max_digits=7, decimal_places=4)


