import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlConstants } from 'src/app/constants/url.constants';
import { CargoRequest } from '../models/cargo-request.model';
import { CargoResponse } from '../models/cargo-response.model';
import { CrudService } from '../../shared/services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class CargoService extends CrudService<CargoRequest, CargoResponse> {

  constructor(
    protected http: HttpClient,
  ){
    super(http, urlConstants.cargo);
  }
}


  /*METODOS DEL CRUD*/

   /*constructor(
    protected http: HttpClient,*/


  /*
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
*/

