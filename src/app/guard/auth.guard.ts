
import { CanActivateFn } from "@angular/router";
  
export const authGuard: CanActivateFn = (route, state) => {
    
  //debugger;
    
  let token = sessionStorage.getItem("token");

  if (!token) {
    alert("guard ==> NO INICIASTE SESION")
    //DEBEMOS REDIRIGIR AL USUARIO HACIA LA PANTALLA DEL TOKEN
    return false;
  }
    
  return true;
};
  
