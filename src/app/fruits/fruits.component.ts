import { Component, OnInit } from '@angular/core';
import { Fruits } from './fruits';
import { FruitsService } from './fruits.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  pageTitle = 'Fruits List';
  fruits: Fruits[];
  imageWidth = 100;
  imageMargin = 2;
  errorMessage = 'Loading data... please wait!';


  constructor(private fruitsService: FruitsService) { }

  ngOnInit(): void {
    this.fruitsService.getFruits().subscribe(
      fruitsData => {
        this.fruits = fruitsData;
        console.log('fruits data; ' + JSON.stringify(fruitsData));
      },
      error => {
        this.errorMessage = error.message;
        console.error('e: ' + this.errorMessage);
      }
    );
  }

}

