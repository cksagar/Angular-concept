import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { IEmployee } from './Interface/employee';

@Component({
  selector: 'app-course',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  displayedColumns: string[];
  title = 'Basic HTML Table with Data binding';
  employees: IEmployee[];
  imagePath = 'https://angular.io/assets/images/logos/angular/angular.svg';
  errorMessage = 'Loading data... please wait!';
  selectedEmployeeCountRadioButton = 'All';

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employeeService.getEmployees()
      .subscribe(data => {
        this.employees = data;
      },
        e => {
          this.errorMessage = e.message;
          console.error('e: ' + this.errorMessage);
        }
      );

    this.displayedColumns = ['id', 'name', 'salary', 'age', 'gender', 'dob'];
  }


  getAllEmployees(): number {
    return this.employees.length;
  }
  getAllMaleEmployees(): number {
    return this.employees.filter(x => x.gender === 'Male').length;
  }

  getAllFemaleEmployees(): number {
    return this.employees.filter(x => x.gender === 'Female').length;
  }

  onEmployeeCountRadioButtonChanged(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }
}
