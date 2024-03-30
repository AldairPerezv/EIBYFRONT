import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/models/login-response.model';
import { LoginRequest } from '../../models/login-request.model';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {     

  loginForm: FormGroup;
  loginRequest: LoginRequest = new LoginRequest();// --> estamos declarando una variable


  constructor(
    private fb:FormBuilder,
    private _authService: AuthService,
    private _router: Router
  )
  {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  login()
  {

    console.log(this.loginForm.getRawValue());
    
    this.loginRequest = this.loginForm.getRawValue(); // --> este login request lo tengo que enviar hacia el servicio web
    
    this._authService.login(this.loginRequest).subscribe({
      next: (data: LoginResponse) => {
        console.log(data);
        alert("Login correcto");
        //redigir al dashboard
        this._router.navigate(['dashboard']);
        
        //NOSOTROS ALMACENAMOS EL VALOR DEL TOKEN Y ALGUNOS VALORES DE NUESTRO AUSUARIO
        
        //PARA SESION STORAGE
        if (data.success)
        {   
          sessionStorage.setItem("token", data.token);
          sessionStorage.setItem("idUsuario", data.usuario.id.toString());
          sessionStorage.setItem("username", data.usuario.username);
          sessionStorage.setItem("fullName", data.persona.nombreCompleto);
          sessionStorage.setItem("rolId", data.rol.id.toString());
        }
        else {
          return;
        }
       },
      error: (err) => { },
      complete: () => { }, 
      
    });

  }


}
