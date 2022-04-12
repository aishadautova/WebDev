from django.db import models

class Company(models.Model):
    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

    name = models.CharField(max_length=200)
    description = models.TextField(max_length=500)
    city = models.CharField(max_length=200)
    address = models.TextField(max_length=500)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address,
        }

class Vacancy(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(max_length=500)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, null=True)
    salary = models.FloatField(default=0)


    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            #'company': self.company
        }


