import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringReverse'
})
export class StringReversePipe implements PipeTransform {
  reverseString(str) {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
  }

  transform(value: string): string {
    return this.reverseString(value);
  }

}
