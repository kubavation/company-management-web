import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../model/employee";
import {environment as Env} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${Env.serverUrl}/employees`);
  }
}
