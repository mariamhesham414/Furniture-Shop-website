import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersInCartComponent } from './orders-in-cart.component';

describe('OrdersInCartComponent', () => {
  let component: OrdersInCartComponent;
  let fixture: ComponentFixture<OrdersInCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersInCartComponent]
    });
    fixture = TestBed.createComponent(OrdersInCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
