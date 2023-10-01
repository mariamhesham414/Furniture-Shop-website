import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counter',
})
export class CounterPipe implements PipeTransform {
  transform(value: number, counter: number = 1): number {
    return counter++;
  }
}
