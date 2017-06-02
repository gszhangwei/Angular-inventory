import {Component, Input} from '@angular/core';
import { Product } from './product/product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products:Product[];

  constructor() {
    this.products = [
      new Product(
      'NICEHAT',
      'A Nice Black Hat',
      '/resources/images/black-hat.jpg',
      ['Men', 'Accessories', 'Hats'],
      29.99
    ),
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/resources/images/black-shoes.jpg',
        ['Men','Shoes','Running Shoes'],
        109.99
      ),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/resources/images/blue-jacket.jpg',
        ['Women','Apparel','Jackets & Vests'],
        238.99
      )]
  }
  productWasSelected(product: Product): void { console.log('Product clicked: ', product);
  }
}
