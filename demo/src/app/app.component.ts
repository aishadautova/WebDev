import { Xliff } from '@angular/compiler';
import { Component } from '@angular/core';
import { Product, products } from './product';
import { categories, category } from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // categories: category[];
  // more: boolean;
  // products: Product[];

  constructor(){ 
    // this.products = products;
    
    // this.categories = categories;

    // this.more = false;
  }

}