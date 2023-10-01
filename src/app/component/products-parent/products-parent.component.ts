import { Component } from '@angular/core';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-products-parent',
  templateUrl: './products-parent.component.html',
  styleUrls: ['./products-parent.component.scss'],
})
export class ProductsParentComponent {
  listFilter: string = '';
  cart: Iproduct[] = [];
  // object........
  func1(newAddedPrd: Iproduct) {
    this.cart.push(newAddedPrd);
    console.log(this.cart);
  }
}
