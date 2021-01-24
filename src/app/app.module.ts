import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { EmployeeService } from './employee/services/employee.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ProductService } from './products/product.service';
import { HeaderComponent } from './header/header.component';
import { CustomerReactiveWayComponent } from './customer-reactive-way/customer-reactive-way.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerReactiveWayComponent,
    HeaderMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatFormFieldModule,
    SharedModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [
    EmployeeService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
