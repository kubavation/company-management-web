import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoaderService} from "../service/loader.service";
import {delay, finalize} from "rxjs/operators";

@Injectable()
export class CorsInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const httpHeader = new HttpHeaders().append("Access-Control-Allow-Origin", "*");
    const req = request.clone({headers: httpHeader});

    return next.handle(req);
  }
}
