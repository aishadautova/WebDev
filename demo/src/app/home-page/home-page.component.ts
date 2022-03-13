import { Component, OnInit } from '@angular/core';
import { products, Product } from '../product';
import { categories, category } from '../category';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  categories: category[];
  more: boolean;
  products: Product[];

  constructor() {
    this.products = products;
    
    this.categories = categories;

    this.more = false;
   }

  ngOnInit(): void {
  }

}
