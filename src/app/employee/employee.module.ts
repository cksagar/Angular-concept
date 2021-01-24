import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employee.component';
import { EmployeeTitlePipe } from './employeeTitle.pipe';
import { EmployeeCountComponent } from './employee-count/employee-count.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        EmployeeComponent,
        EmployeeTitlePipe,
        EmployeeCountComponent
    ],
    imports: [SharedModule, RouterModule.forChild([
        { path: '', component: EmployeeComponent }
    ])],
    exports: [
        EmployeeComponent,
        EmployeeTitlePipe,
        EmployeeCountComponent]
})


export class EmployeeModule {
}
