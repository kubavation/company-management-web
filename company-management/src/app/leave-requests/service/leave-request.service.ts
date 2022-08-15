import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment as Env} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {

  constructor(private http: HttpClient) { }

  public findByEmployeeId(employeeId: number): Observable<any[]> {
    return this.http.get<any[]>(`${Env.serverUrl}/leave-requests/${employeeId}`)
  }
}
