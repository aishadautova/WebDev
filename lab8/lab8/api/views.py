#from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
from api.models import Product, Category

def hello(request):
    return HttpResponse('hello view function response')


def product_list(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)

def product_detail(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'massage': str(e)}, status=400)

    return JsonResponse(product.to_json())

def category_list(request):
    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories]
    return JsonResponse(categories_json, safe=False)

def category_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'massage': str(e)}, status=400)

    return  JsonResponse(category.to_json())

def category_product(request, category_id):
    products = Product.objects.all().filter(id=category_id)
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)


# def product_list(request):
#     return HttpResponse('List of products')
#
# def product_detail(request, product_id):
#     return HttpResponse(f'details of products: {product_id}')

# products = [
#     {
#         'id': i,
#         'name': f'Product {i}',
#         'price': i*100,
#         'description': f'Product {i}',
#         'count': round(i*7/4),
#         'is_active': True,
#     }
#     for i in range(1, 10)
# ]

# categories = [
#     {
#         'id': i,
#         'name': f'Category {i}',
#     }
#     for i in range(1, 10)
# ]
