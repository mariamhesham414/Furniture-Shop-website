import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewproductReactiveComponent } from './newproduct-reactive.component';

describe('NewproductReactiveComponent', () => {
  let component: NewproductReactiveComponent;
  let fixture: ComponentFixture<NewproductReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewproductReactiveComponent]
    });
    fixture = TestBed.createComponent(NewproductReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
