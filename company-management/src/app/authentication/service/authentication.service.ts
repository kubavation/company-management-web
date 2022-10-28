import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationRequest} from "../model/authentication-request";
import {Observable} from "rxjs";
import {environment as Env} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }


  public authenticate(authRequest: AuthenticationRequest): Observable<string> {
    return this.http.post<string>(`${Env.authUrl}/authentication`, authRequest);
  }
}
