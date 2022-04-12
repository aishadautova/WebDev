# from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
from api.models import Company, Vacancy

def companies_list(request):
    companies = Company.objects.all()
    company_json = [company.to_json() for company in companies]
    return JsonResponse(company_json, safe=False)

def company_deatail(request, company_id):
    try:
        company = Company.objects.get(id = company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'massage': 'Company does not exist'}, status=400)
    return JsonResponse(company.to_json())

def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    vacancy_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancy_json, safe=False)

def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id = vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message': 'Vacancy does not exist'}, status=400)
    return JsonResponse(vacancy.to_json())

def company_vacancies(request, company_id):
    vacancies = Vacancy.objects.filter(company = company_id)
    vacancy_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancy_json, safe=False)

def top_ten(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[0:10]
    vacancy_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancy_json, safe=False)

