import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CargoRequest } from './models/cargo-request.model';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  usuario = "";
  password = "";
  nombreUsuario = "NOMBRE USUARIO";
  title = 'Eiby Moda';

  

  //declaramos la variable toke
  token: string = "";

  cargos: CargoRequest[] = [];

  constructor(
    private _authService: AuthService
  ) {

  }


  ngOnInit(): void {
    console.log("EVENTO ON INIT");

  }

  ngAfterViewInit(): void {

  }

  iniciarSesion() {

    let loginRequest: any = {};
    console.log("usuario ==> ", this.usuario);
    console.log("password ==> ", this.password);

    loginRequest.userName = this.usuario;
    loginRequest.password = this.password;

    this._authService.login(loginRequest).subscribe(
      {
        //Cuando todo esta success
        next: (data: any) => {
          console.log("IMPRIMIENDO RESULTADO LOGIN", data);
          this.token = data.token;
          this.listarRoles();
        },
        error: () => { },
        complete: () => {
          
        }

      }
    );
  }

  /**
   * TODO: COMO PARAMETRO SE DEBE ENVIAR EL TOKEN OBTENIDO AL MOMENTO DE INICIAR SESIÓN
   */
  listarRoles() {    
    console.log("token ==> ", this.token);   
    this._authService.roles(this.token).subscribe(
      {
        next: (data: any) => {
          console.log("IMPRIMIENDO ROLES: ", data);
          this.cargos = data;
        },
        error: () => {
          console.log("NO SE PUEDO OBTENER LA LISTA DE ROLES ");
        },
        complete: () => { }
      }
    );


  }
}
