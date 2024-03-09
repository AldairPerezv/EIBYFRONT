import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargoResponse } from 'src/app/models/cargo-response.model';
import { CargoService } from '../../../service/cargo.service';

@Component({
  selector: 'app-mant-cargo-list',
  templateUrl: './mant-cargo-list.component.html',
  styleUrls: ['./mant-cargo-list.component.scss']
})
export class MantCargoListComponent implements OnInit {

  cargos: CargoResponse[] = [];

  constructor(
    private _route: Router,
    private _cargoService:CargoService
  )
  {

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
