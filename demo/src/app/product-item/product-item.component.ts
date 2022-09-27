import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product, products} from '../product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product!: Product | undefined;
  
  constructor() { }

  ngOnInit(): void {
  } 

}