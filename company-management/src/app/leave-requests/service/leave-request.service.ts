import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment as Env} from "../../../environments/environment";
import {Employee} from "../../shared/employee/model/employee";
import {KeyValue} from "../../shared/model/key-value";
import {LeaveRequest} from "../model/leave-request";
import {LeaveRequestType} from "../model/leave-request-type";
import {LeaveRequestFilter} from "../model/leave-request-filter";

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {

  constructor(private http: HttpClient) { }

  public findLeaveRequestTypes(): Observable<KeyValue<string>[]> {
    return this.http.get<KeyValue<string>[]>(`${Env.serverUrl}/leave-privileges/types`)
  }

  public findByEmployeeIdAndRequestType(employeeId: number, requestType: LeaveRequestType): Observable<LeaveRequest[]> {
    const httpParams = new HttpParams().append("type", requestType)
    return this.http.get<LeaveRequest[]>(`${Env.serverUrl}/leave-requests/employees/${employeeId}`, requestType ? {params: httpParams} : {})
  }

  public findByFilters(filters: LeaveRequestFilter): Observable<LeaveRequest[]> {
    return this.http.post<LeaveRequest[]>(`${Env.serverUrl}/leave-requests`, filters)
  }

  public findStandInEmployees(employeeId: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${Env.serverUrl}/leave-requests/${employeeId}/standin-employees`);
  }
}
