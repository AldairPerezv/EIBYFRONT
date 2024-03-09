import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlConstants } from 'src/app/constants/url.constants';
import { CargoRequest } from '../models/cargo-request.model';
import { CargoResponse } from '../models/cargo-response.model';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(
    private _http: HttpClient
  ) { }

  /*METODOS DEL CRUD*/

  getAll(): Observable<CargoResponse[]>
  {
    // let auth_token = sessionStorage.getItem("token");
    // const jwtHeaders = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorizacion': `Bearer ${auth_token}`
    // })
    // return this._http.get<CargoResponse[]>(urlConstants.cargo,{ headers: jwtHeaders });
    return this._http.get<CargoResponse[]>(urlConstants.cargo);

  }
  create(request:CargoRequest) : Observable<CargoRequest> {
    return this._http.post<CargoResponse>(urlConstants.cargo, request);
   }
  update(request:CargoRequest) : Observable<CargoRequest> {
    return this._http.post<CargoResponse>(urlConstants.cargo, request);
   }
  delete(id: number): Observable<number> {
    //interpolacion 
    return this._http.delete<number>(`${urlConstants.cargo}${id}`);
   }
  
    //mapear los request response

}
