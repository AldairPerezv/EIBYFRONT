import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    protected http:HttpClient
  ) { 

  }

  roles() {

    return this.http.get("")

  }


  login(request:any) {

    return this.http.post("",request)

   }


}
