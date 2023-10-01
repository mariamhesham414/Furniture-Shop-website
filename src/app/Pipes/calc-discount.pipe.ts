import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcDiscount',
})
export class CalcDiscountPipe implements PipeTransform {
  transform(value: number, discountNum: number = 50): number {
    // value =400
    // discount num =50
    let dis = discountNum / 100; // 50/100=0.5
    let mulOriginalByDis = value * dis; // 400*0.5=200
    let sub = value - mulOriginalByDis; // 400-200=200

    return sub;
  }
}
