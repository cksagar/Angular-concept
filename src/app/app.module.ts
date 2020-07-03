import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SimpleChangesComponent } from './other/SimpleChanges.component';
import { ExponentialPipe } from './exponential.pipe';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { EmployeeServices } from './employee/services/employee.services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { StringReversePipe } from './string-reverse.pipe';
import { EmployeeCountComponent } from './employee/employee-count/employee-count.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeTitlePipe,
    ExponentialPipe,
    StringReversePipe,
    EmployeeCountComponent,
    SimpleChangesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    EmployeeServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
