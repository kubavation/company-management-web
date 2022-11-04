import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {map, startWith, tap} from "rxjs/operators";
import {getToken} from "codelyzer/angular/styles/cssLexer";

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  private readonly TOKEN_KEY = 'TOKEN';

  constructor() { }

  private tokenRefreshSubject$ = new Subject<void>();

  isTokenSet$ = this.tokenRefreshSubject$.pipe(
    startWith(this.getToken()),
    map(_ => this.isTokenSet()),
  )

  setToken(jwtToken: string): void {
    localStorage.setItem(this.TOKEN_KEY, jwtToken);
    this.tokenRefreshSubject$.next();
  }

  public isTokenSet() {
    return this.getToken() != null;
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.tokenRefreshSubject$.next();
  }

  getToken(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }


}
