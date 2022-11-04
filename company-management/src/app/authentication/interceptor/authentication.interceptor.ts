import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenStorageService} from "../service/token-storage.service";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private tokenStorageService: TokenStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const jwtToken = this.tokenStorageService.getToken();

    if (!jwtToken) {
      return next.handle(request);
    }

    const req = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${jwtToken}`)
    })

    return next.handle(req);
  }
}
