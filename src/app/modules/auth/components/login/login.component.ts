import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private _authService:AuthService
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
        
       },
      error: (err) => { },
      complete: () => { }, 
      
    });

  }


}
