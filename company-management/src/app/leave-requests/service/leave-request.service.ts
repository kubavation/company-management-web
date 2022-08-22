import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment as Env} from "../../../environments/environment";
import {Employee} from "../../shared/employee/model/employee";

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {

  constructor(private http: HttpClient) { }

  public findLeaveRequestTypes(): Observable<any[]> {
    return this.http.get<any[]>(`${Env.serverUrl}/leave-privileges/types`)
  }

  public findByEmployeeId(employeeId: number): Observable<any[]> {
    return this.http.get<Employee[]>(`${Env.serverUrl}/leave-requests/${employeeId}`)
  }
}
