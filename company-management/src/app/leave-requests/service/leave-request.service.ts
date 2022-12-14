import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment as Env} from "../../../environments/environment";
import {Employee} from "../../shared/employee/model/employee";
import {KeyValue} from "../../shared/model/key-value";
import {LeaveRequest} from "../model/leave-request";
import {LeaveRequestType} from "../model/leave-request-type";
import {LeaveRequestFilter} from "../model/leave-request-filter";
import {CreateLeaveRequest} from "../model/create-leave-request";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {

  constructor(private http: HttpClient) { }

  public findLeaveRequestTypes(): Observable<KeyValue<string>[]> {
    return this.http.get<KeyValue<string>[]>(`${Env.serverUrl}/leave-privileges/types`)
  }

  public findByEmployeeIdAndRequestType(employeeId: number, requestType: string): Observable<LeaveRequest[]> {
    const httpParams = new HttpParams().append("type", requestType)
    return this.http.get<LeaveRequest[]>(`${Env.serverUrl}/leave-requests/employees/${employeeId}`, requestType ? {params: httpParams} : {})
  }

  public findByFilters(filters: LeaveRequestFilter): Observable<LeaveRequest[]> {
    return this.http.post<LeaveRequest[]>(`${Env.serverUrl}/leave-requests/filters`, filters);
  }

  public findStandInEmployees(employeeId: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${Env.serverUrl}/leave-requests/${employeeId}/standin-employees`);
  }

  public create(request: CreateLeaveRequest): Observable<void> {
    return this.http.post<void>(`${Env.serverUrl}/leave-requests`, request);
  }

  public edit(id: number, request: CreateLeaveRequest): Observable<void> {
    return this.http.put<void>(`${Env.serverUrl}/leave-requests/${id}`, request);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${Env.serverUrl}/leave-requests/${id}`);
  }

}
