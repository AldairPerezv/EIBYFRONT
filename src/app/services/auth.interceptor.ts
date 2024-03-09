import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let token = sessionStorage.getItem("token");
    //puedo obtener otras variables


    let request = req;
    if (token) {
      request = req.clone(
        {
          setHeaders: {
            authorization: `Bearer ${token}`
          } 
        });
    }

    return next.handle(request);

    
  }
}
