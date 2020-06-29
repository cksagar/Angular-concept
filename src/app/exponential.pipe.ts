
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'exponentNumber'
})
export class ExponentialPipe implements PipeTransform {
    transform(value: number, exponent: number): number {
        return Math.pow(value, exponent);
    }
}
