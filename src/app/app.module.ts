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
import { EmployeeModule } from './employee/employee.module';
import { SharedModule } from './shared/shared.module';
import { SimpleChangesModule } from './simple-changes/simple-changes.module';
import { ProductService } from './products/product.service';
import { CustomerComponent } from './customer/customer.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/product.module').then(product => product.ProductModule)
  },
  {
    path: 'fruits',
    loadChildren: () =>
      import('./fruits/fruits.module').then(fruits => fruits.FruitsModule)
  },
  { path: 'employee', component: EmployeeComponent },
  { path: 'simple-changes', component: SimpleChangesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
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
