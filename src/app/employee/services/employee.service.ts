
import { Injectable } from '@angular/core';
import { IEmployee } from '../interface/employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    private empUrl = '/assets/api/emp.json';
    constructor(private httpClient: HttpClient) {
    }

    getEmployees(): Observable<IEmployee[]> {
        return this.httpClient.get<IEmployee[]>(this.empUrl);
    }
}
