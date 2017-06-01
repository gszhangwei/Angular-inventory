import { Component, OnInit } from '@angular/core';
import { Product } from './product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product : Product;
  constructor() {
    this.product = new Product(
      'NICEHAT',
      'A Nice Black Hat',
      '/resources/images/products/black-hat.jpg',
      ['Men','Accessories','Hats'],
      29.99
    )
  }

  ngOnInit() {
  }

}
