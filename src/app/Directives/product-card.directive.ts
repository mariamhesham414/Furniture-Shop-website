import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appProductCard]',
})
export class ProductCardDirective {
  @Input() radius1: string = '0px';
  @Input('appProductCard') radius2: string = '50px';

  // property decorator

  constructor(private elementRef: ElementRef) {
    // this.elementRef.nativeElement.style.borderRadius = '50%';
  }
  // method decorator
  @HostListener('mouseover') func1() {
    // this.elementRef.nativeElement.style.borderRadius = `100px`;
    this.elementRef.nativeElement.style.borderRadius = `${this.radius2}`;
    this.elementRef.nativeElement.style.boxShadow = '10px 10px 5px grey';
  }
  @HostListener('mouseout') func2() {
    this.elementRef.nativeElement.style.borderRadius = `${this.radius1}`;
    this.elementRef.nativeElement.style.boxShadow = '0px 0px 0px transparent';
  }
}
