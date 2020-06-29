import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  money = 7543;
  pi = 3.14;
  e = 2.718281828459045;
  today: number = Date.now();
  title = 'Angular-Concepts';
  viewMode = 'oher';
  imagePath  = 'https://angular.io/assets/images/logos/angular/angular.svg';
  myName = 'Enter text here';
  baseNumber = 2;
  exponent = 10;
  str = 'Enter text';

  courses = [
    { id: 1, name: 'js' },
    { id: 2, name: 'ts' },
    { id: 3, name: 'ang' }
  ];
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
