

import { Component, OnChanges, Input, SimpleChanges, SimpleChange } from '@angular/core';


@Component({
    selector: 'app-simple-changes',
    templateUrl: './simple-changes.component.html'
})
export class SimpleChangesComponent {

    @Input() simpleInput: string;
    inputText = '';
    courses = [
        { id: 1, name: 'js' },
        { id: 2, name: 'ts' },
        { id: 3, name: 'ang' }
    ];
    baseNumber = 2;
    exponent = 10;
    str = 'Enter text';
    userText = 'hello'; 
    money = 7543;
    pi = 3.14;
    e = 2.718281828459045;
    today: number = Date.now();
    viewMode = 'oher';

    ngOnChanges(changes: SimpleChanges) {
        for (let propertyName in changes) {
            let change = changes[propertyName];
            let currentChange = JSON.stringify(change.currentValue);
            let previousChange = JSON.stringify(change.previousValue);
            console.log('  change: ' + change + '  propertyName: ' + propertyName + "  currentChange: " + currentChange + " previousChange: " + previousChange);
        }
    }

    addCourse() {
        this.courses.push({ id: 3, name: 'angular' });
    }

    removeCourse(course) {
        const index = this.courses.indexOf(course);
        this.courses.splice(index, 1);
    }

    onClick() {
        console.log('button clciked');
    }
}


