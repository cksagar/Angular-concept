import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ExponentialPipe } from '../exponential.pipe';
import { StringReversePipe } from '../string-reverse.pipe';
import { SimpleChangesComponent } from './simpleChanges.component';



@NgModule({
  declarations: [
    ExponentialPipe,
    StringReversePipe,
    SimpleChangesComponent],
  imports: [
    CommonModule,
      
     SharedModule
  ]
})
export class SimpleChangesModule { }
