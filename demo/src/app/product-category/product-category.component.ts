import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../product';
import { categories, category } from '../category';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  category:  category | undefined;
  products: Product[];
 
  constructor(
    private route: ActivatedRoute 
  ) {
    this.products = products;
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdfromRoute = Number(routeParams.get('categoryId'));

    this.category = categories.find(category => category.id === categoryIdfromRoute);
  }

  share(){
    
  }

  onNotify(){
    window.alert('You will be notified when the product goes on sale');
  }

}
