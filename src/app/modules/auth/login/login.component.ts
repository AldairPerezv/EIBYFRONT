import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = "";
  password: string = "";

  login()
  {
    console.log("this.username ==> ", this.username);
    console.log("this.password ==> ", this.password);
    
  }


}
