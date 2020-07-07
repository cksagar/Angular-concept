
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacePipe implements PipeTransform {
    transform(value: string, charector: string) {
        return value.replace(charector, ' ');
    }
}
