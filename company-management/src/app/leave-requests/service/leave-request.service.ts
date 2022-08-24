import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment as Env} from "../../../environments/environment";
import {Employee} from "../../shared/employee/model/employee";
import {KeyValue} from "../../shared/model/key-value";
import {LeaveRequest} from "../model/leave-request";

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {

  constructor(private http: HttpClient) { }

  public findLeaveRequestTypes(): Observable<KeyValue<string>[]> {
    return this.http.get<KeyValue<string>[]>(`${Env.serverUrl}/leave-privileges/types`)
  }

  public findByEmployeeId(employeeId: number): Observable<LeaveRequest[]> {
    return this.http.get<LeaveRequest[]>(`${Env.serverUrl}/leave-requests/${employeeId}`)
  }
}
