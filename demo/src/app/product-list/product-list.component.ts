import { Component, OnInit } from '@angular/core';

import { Product, products } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(){
    this.products = products;
  }

  share(){
    
  }

  onNotify(){
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnInit(): void {
  }

}
