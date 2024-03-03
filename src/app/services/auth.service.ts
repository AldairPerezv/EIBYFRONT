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

    return this.http.get("https://localhost:7067/api/Empleado")

  }


  login(request:any) {

    return this.http.post("",request)

   }


}
