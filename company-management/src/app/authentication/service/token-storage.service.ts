import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  private readonly TOKEN_KEY = 'TOKEN';

  constructor() { }

  setToken(jwtToken: string): void {
    localStorage.setItem(this.TOKEN_KEY, jwtToken);
  }

  getToken(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isTokenSet(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
}
