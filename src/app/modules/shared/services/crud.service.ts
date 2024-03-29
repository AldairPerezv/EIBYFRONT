import { Inject, Injectable, inject } from '@angular/core';
import { CrudInterface } from '../interfaces/crud-interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class CrudService<T,Y>  implements CrudInterface<T,Y> {

  constructor(
    protected _http: HttpClient,
    @Inject('url_services') public url_services: string

  ) { }

  getAll(): Observable<Y[]> {
    return this._http.get<Y[]>(this.url_services);
  }
  create(request: T): Observable<Y> {
    return this._http.post<Y>(this.url_services,request);
  }
  update(request: T): Observable<Y> {
    return this._http.put<Y>(this.url_services,request);
  }
  delete(id: number): Observable<number> {
    return this._http.delete<number>('${this.url_services}${id}');
  }
}
