import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersInWishlistComponent } from './orders-in-wishlist.component';

describe('OrdersInWishlistComponent', () => {
  let component: OrdersInWishlistComponent;
  let fixture: ComponentFixture<OrdersInWishlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersInWishlistComponent]
    });
    fixture = TestBed.createComponent(OrdersInWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
