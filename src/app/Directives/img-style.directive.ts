import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[ImgStyle]',
})
export class ImgStyleDirective implements OnChanges {
  // document.getElementBy..............
  // border-radius => borderRadius

  // property decorator
  @Input() radius1: string = '50px';
  @Input('ImgStyle') radius2: string = '20px';
  constructor(private elementRef: ElementRef) {
    // this.elementRef.nativeElement.style.borderRadius = '50%';
    console.log('constructor');
  }
  ngOnChanges(): void {
    // throw new Error('Method not implemented.');
    this.elementRef.nativeElement.style.borderRadius = `${this.radius1}`;
    console.log('ngOnChanges');
  }
  // method decorator
  @HostListener('mouseover') func1() {
    this.elementRef.nativeElement.style.borderRadius = `${this.radius1}`;
    this.elementRef.nativeElement.style.opacity = '.7';
  }
  @HostListener('mouseout') func2() {
    this.elementRef.nativeElement.style.borderRadius = `${this.radius2}`;
    this.elementRef.nativeElement.style.opacity = '1';
  }
}
