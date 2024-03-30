import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargoResponse } from 'src/app/models/cargo-response.model';
import { CargoService } from '../../../service/cargo.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-mant-cargo-list',
  templateUrl: './mant-cargo-list.component.html',
  styleUrls: ['./mant-cargo-list.component.scss']
})
export class MantCargoListComponent implements OnInit {

  //modalRef?: BsModalRef;
  cargos: CargoResponse[] = [];
  cargoSelected: CargoResponse = new CargoResponse(); 
  titleModal: string = "";
  accionModal: number = 0;
  myFormFilter: FormGroup; 


  constructor(
    private _route: Router,
    private fb: FormBuilder,
    //private modalService: BsModalService,
    private _cargoService:CargoService,
  )
  {
    this.myFormFilter = this.fb.group({
      codigo: [null, [Validators.required]],
      nombre: [null, [Validators.required]],
      idEstado: [null, [Validators.required]],
    });
  }

  /**
   * FIXME: ES EL PRIMER EVENTO QUE EJECUTA EL COMPONENTE
   */
  ngOnInit(): void {
    
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

}
