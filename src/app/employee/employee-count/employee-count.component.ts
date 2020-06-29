import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {

  constructor() { }
  all = 4;
  male = 2;
  female = 2;

  ngOnInit(): void {

  }

}
