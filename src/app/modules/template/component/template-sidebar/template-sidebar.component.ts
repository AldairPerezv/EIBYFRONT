import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-sidebar',
  templateUrl: './template-sidebar.component.html',
  styleUrls: ['./template-sidebar.component.scss']
})
export class TemplateSidebarComponent implements OnInit {
  menu:any []=[];
  ngOnInit(): void {



    this.rellenarMenu();
  }

rellenarMenu ()
{
  let rolId = sessionStorage.getItem("rolID");
  switch(rolId)
  {
    //TODO - CUANDO ES ADMINISTADOR 
    case "1":
        this.menu = [
          {
            name: "Mantenimiento", target:"TargetMantenimiento",
            //TODO - PODRIA HABER UN PROBLEMA POR CULPA DE ESTE CODIGO ADVERTENCIA V:
            subMenu: [
              {name:"Cargo",url:"template-sidebar.component.html",icom: "fas fa-laugh-wink"},          
              {name:"Persona",url:"template-sidebar.component.html",icom: "fas fa-laugh-wink"},
            ] 
          },
          {
            name: "Atencion", target:"TargetMantenimiento",
            //TODO - PODRIA HABER UN PROBLEMA POR CULPA DE ESTE CODIGO ADVERTENCIA V:
            subMenu: [
              {name:"atencion 1",url:"template-sidebar.component.html",icom: "fas fa-laugh-wink"},          
              {name:"atencion 2",url:"template-sidebar.component.html",icom: "fas fa-laugh-wink"},
            ] 
          }
        ];
      break;
    case "2" : break;
    case "3" : break;
    case "4" : break;
  }
}

}

