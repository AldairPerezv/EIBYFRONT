import { AfterViewInit, Component, OnInit } from '@angular/core';
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

  roles = [
    {
      id: 1,
      name: "ADMIN"
    },
    {
      id: 2,
      name: "CAJERO"
    },
    {
      id: 3,
      name: "VENTAS"
    },
    {
      id: 4,
      name: "CONTADOR"
    }
  ];

  //declaramos la variable toke
  token: string = "";
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
        },
        error: () => {
          console.log("NO SE PUEDO OBTENER LA LISTA DE ROLES ");
        },
        complete: () => { }
      }
    );


  }
}
