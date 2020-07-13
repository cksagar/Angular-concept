import { Component, OnInit } from '@angular/core';
import { Fruits, FruitsResolved } from './fruits';
import { FruitsService } from './fruits.service';
import { ActivatedRoute, ResolveData } from '@angular/router';

@Component({
  selector: 'app-fruits-detail',
  templateUrl: './fruits-detail.component.html',
  styleUrls: ['./fruits-detail.component.css']
})
export class FruitsDetailComponent implements OnInit {

  pageTitle = 'Fruit Detail';
  fruit: Fruits;
  errorMessage: string;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      const resolvedData: FruitsResolved = data['resolvedData'];
      this.errorMessage = resolvedData.error;
      this.onProductRetrieved(resolvedData.fruit);
    });

    // const param = this.activatedRoute.snapshot.paramMap.get('id');
    // if (param) {
    //   const id = +param;
    //   this.getItem(id);
    // }
  }

  onProductRetrieved(fruit: Fruits): void {
    this.fruit = fruit;

    if (this.fruit) {
      this.pageTitle = `Product Detail: ${this.fruit.name}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }


  // no need to call beacuse of resolver.
  /*  getItem(id: number) {
     this.fruitService.getFruitDetails(id).subscribe({
       next: fruit => this.fruit = fruit,
       error: err => this.errorMessage = err
     });
   } */

}

