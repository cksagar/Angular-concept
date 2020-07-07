import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [StarComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule
  ],
  exports: [CommonModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    StarComponent]
})
export class SharedModule { }
