import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment as Env} from "../../../../../environments/environment";
import {Observable} from "rxjs";
import {Organisation} from "../model/Organisation";

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  constructor(private http: HttpClient) { }

  public getOrganisationsByLevel(level: number): Observable<Organisation[]> {
    return this.http.get<Organisation[]>(`${Env.serverUrl}/organisations/level/${level}`);
  }
}
