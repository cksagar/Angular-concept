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

  constructor(private employeeServices: EmployeeServices) {
  }

  ngOnInit(): void {
    this.employees = this.employeeServices.getServies();
    this.displayedColumns = ['id', 'name', 'salary', 'age', 'gender', 'dob'];
  }
}
