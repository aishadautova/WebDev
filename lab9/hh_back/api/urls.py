from django.urls import path
from api.views import companies_list, vacancies_list, company_deatail, vacancy_detail, company_vacancies, top_ten

urlpatterns = {
    path('companies/', companies_list),
    path('companies/<int:company_id>/', company_deatail),
    path('vacancies/', vacancies_list),
    path('vacancies/<int:vacancy_id>/', vacancy_detail),
    path('companies/<int:company_id>/vacancies/', company_vacancies),
    path('vacancies/top_ten/', top_ten)
}

