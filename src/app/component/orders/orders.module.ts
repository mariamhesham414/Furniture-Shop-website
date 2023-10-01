import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersInCartComponent } from './orders-in-cart/orders-in-cart.component';
import { OrdersInWishlistComponent } from './orders-in-wishlist/orders-in-wishlist.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'cart', component: OrdersInCartComponent, title: 'Cart Page' },
  {
    path: 'wishlist',
    component: OrdersInWishlistComponent,
    title: 'Wishlist Page',
  },
];

@NgModule({
  declarations: [OrdersInCartComponent, OrdersInWishlistComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class OrdersModule {}
