import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargoResponse } from 'src/app/models/cargo-response.model';
import { CargoService } from '../../../service/cargo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GenericFilterRequest } from 'src/app/models/generic-filter-request.model';
import { GenericFilterResponse } from 'src/app/models/generic-filter-response.model';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { filter } from 'rxjs';




@Component({
  selector: 'app-mant-cargo-list',
  templateUrl: './mant-cargo-list.component.html',
  styleUrls: ['./mant-cargo-list.component.scss']
})
export class MantCargoListComponent implements OnInit {
changeItemsPerpage() {
throw new Error('Method not implemented.');
}
//TODO ACA SE CAMBIO LA PARTE CHANGEPAGE OJO :/
$event: any;
changePage(event: PageChangedEvent) {
  this.request.numeroPagina = event.page;
  this.filtrar();

throw new Error('Method not implemented.');
}

  //modalRef?: BsModalRef;
  cargos: CargoResponse[] = [];
  cargoSelected: CargoResponse = new CargoResponse(); 
  titleModal: string = "";
  accionModal: number = 0;
  myFormFilter: FormGroup; 
  totalItems: number = 0;
  itemsPerPage: number =3;
  request: GenericFilterRequest = new GenericFilterRequest

  constructor(
    private _route: Router,
    private fb: FormBuilder,
    //private modalService: BsModalService,
    private _cargoService:CargoService,
  )
  {
    this.myFormFilter = this.fb.group({
      codigo: ["", []],
      nombre: ["", []],
      idEstado: ["", []],
    });
  }

  /**
   * FIXME: ES EL PRIMER EVENTO QUE EJECUTA EL COMPONENTE 
   */
  ngOnInit(): void {

      this.filtrar();
    
    this._cargoService.getAll().subscribe({

      next: (data: CargoResponse[]) => {
        this.cargos = data;
      },
      error: (err) => {
        console.log("error", err);
      },
      complete: () => {
        //hare algo
      },

    });
   
  }

  filtrar()
  {
    let valueForm = this.myFormFilter.getRawValue();  
    this.request.filtros.push({name:"codigo",value:valueForm.codigo});
    this.request.filtros.push({name:"nombre",value:valueForm.nombre});
    this.request.filtros.push({name:"idEstado",value:valueForm.idEstado});

      this._cargoService.genericFilter(this.request).subscribe({
        next:(data: GenericFilterResponse<CargoResponse>)=>{
          console.log(data);
          this.cargos = data.lista;
          this.totalItems = data.totalRegistros;
        },
        error:()=>{
          console.log("error");
        },
        complete:()=>{
          console.log("completo");
        },
      })
  }
}
  


