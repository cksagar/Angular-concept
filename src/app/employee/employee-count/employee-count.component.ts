import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {

  constructor() { }

  selectedRadioButtonValue = 'All';

  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  all = 5;

  @Input()
  male = 34;

  @Input()
  female = 23;

  ngOnInit(): void {

  }

  onRadioButtonSelectionChange(){
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    console.log(this.selectedRadioButtonValue);
  }

}
