import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {MenuOption} from "../model/menu-option";
import {environment as Env} from "../../../environments/environment";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private http: HttpClient) { }

  public getMenuOptions(): Observable<MenuOption[]> {
    return this.http.get<MenuOption[]>(`${Env.serverUrl}/menu-config`);
  }
}
