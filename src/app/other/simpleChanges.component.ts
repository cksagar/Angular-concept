

import { Component, OnChanges, Input, SimpleChanges, SimpleChange } from '@angular/core';


@Component({
    selector: 'app-simple-changes',
    template: `you entered: {{simpleInput}}`
})
export class SimpleChangesComponent implements OnChanges {

    @Input() simpleInput: string;

    ngOnChanges(changes: SimpleChanges) {
        for (let propertyName in changes) {
            let change = changes[propertyName];
            let currentChange = JSON.stringify(change.currentValue);
            let previousChange = JSON.stringify(change.previousValue);
            console.log('  change: ' + change + '  propertyName: ' + propertyName + "  currentChange: " + currentChange + " previousChange: " + previousChange);
        }
    }
}


