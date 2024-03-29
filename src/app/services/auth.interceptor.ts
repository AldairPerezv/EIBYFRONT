import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { alert_error } from 'src/functions/general.functions';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let token = sessionStorage.getItem("token");
    //puedo obtener otras variables

    //SIMULAR LOS ERRORES - MANEJO DE ERRORES

    let request = req;
    if (token) {
      request = req.clone(
        {
          setHeaders: {
            authorization: `Bearer ${token}`
          } 
        });
    }

    return next.handle(request).pipe( 
      catchError(
        (err:HttpErrorResponse): Observable <any> =>{
          return throwError('Algo salió mal');

          let error=err.error;
          let title:string="Error en el servidor | Comuniquese con con SISTEMA";
        
          switch(err.status)
          {
            case  400: //TODO: BAD REQUEST 
                  alert_error("ERROR BAS REQUEST","DATOS INCORRECTOS")
            break;
            case  401: //TODO: NO TIENES PERMISOS
                  alert_error("VULEVE A INICIAR SESION PRECIOSOT","VUELVA A INICIAR EL LOGIN")
                  this.router.navigate(['']);
            break;
            case  404: //TODO: URL NO ENCONTRADA
                  alert_error("RECURSOS NO ENCOTRADOS","JAJAJAJ BABOSO")
            break;
            case  403: //TODO: NO TIENES PERMISOS PARA EJECUTAR UNA DETERMINADA ACCION
                  alert_error("PERMISOS INSUFICIENTES","COORDINE CON SU ADMIN")
            break;
            case  500: //TODO: ERROR NO CONTROLADO 
                  alert_error("OCURRIO UN ERROR","INTENTALO EN UNOS MINUTOS")
            break;
            case  0:
                  alert_error("OCURRIO UN ERROR","no podemos comunicarnos con el servicio")
            break;
          default:
            alert(":C RAIOS VUELVE A INTENTARLO")
            break;
          }})
          
          )}}