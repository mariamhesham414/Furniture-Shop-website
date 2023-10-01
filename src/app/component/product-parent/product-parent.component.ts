import { Component } from '@angular/core';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-parent',
  templateUrl: './product-parent.component.html',
  styleUrls: ['./product-parent.component.scss'],
})
export class ProductParentComponent {
  listFilter: string = '';
  // count: number = 0;

  total: number = 0;
  cart: Iproduct[] = [];
  fun(newcard: Iproduct) {
    var list: Iproduct[] = this.cart.filter((p: Iproduct) =>
      p.name.toLocaleLowerCase().includes(newcard.name)
    );
    if (list.length == 0) {
      newcard.count = 1;
      this.cart.push(newcard);
      console.log(this.cart);
    } else if (newcard.count) {
      newcard.count = newcard.count + 1;
    }
    this.total += newcard.price;
  }
  numOfItems(count: number = 0, price: number): number {
    return count * price;
  }
}
