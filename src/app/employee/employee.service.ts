import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiURL = "https://demo3-167023245316.us-central1.run.app/employee";
  constructor(private httpClient:HttpClient) { }


  public getEmployees():Observable<Employee[]>
  {

    return this.httpClient.get<Employee[]>(this.apiURL);
  }


}
