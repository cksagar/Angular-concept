import { Component, OnInit } from '@angular/core';
import { EmployeeServices } from './services/employee.services';
import { Employee } from './Interface/employee';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-course',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  displayedColumns: string[];
  title = 'Basic HTML Table with Data binding';
  employees: Employee[];
  imagePath = 'https://angular.io/assets/images/logos/angular/angular.svg';

  selectedEmployeeCountRadioButton = 'All';

  constructor(private employeeServices: EmployeeServices) {
  }

  ngOnInit(): void {
    this.employees = this.employeeServices.getServies();
    this.displayedColumns = ['id', 'name', 'salary', 'age', 'gender', 'dob'];
  }


  getAllEmployees(): number {
    return this.employees.length;
  }
  getAllMaleEmployees(): number {
    return this.employees.filter(x => x.gender === 'male').length;
  }

  getAllFemaleEmployees(): number {
    return this.employees.filter(x => x.gender === 'female').length;
  }

  onEmployeeCountRadioButtonChanged(selectedRadioButtonValue: string): void{
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }
}
