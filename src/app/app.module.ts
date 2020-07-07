import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SimpleChangesComponent } from './simple-changes/simpleChanges.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './employee/services/employee.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductService } from './products/services/product.service';
import { ProductModule } from './products/product.module';
import { EmployeeModule } from './employee/employee.module';
import { SharedModule } from './shared/shared.module';
import { SimpleChangesModule } from './simple-changes/simple-changes.module';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'simple-changes', component: SimpleChangesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ProductModule,
    EmployeeModule,
    SimpleChangesModule,
    SharedModule
  ],
  providers: [
    EmployeeService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
