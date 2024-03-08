import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mant-cargo-list',
  templateUrl: './mant-cargo-list.component.html',
  styleUrls: ['./mant-cargo-list.component.scss']
})
export class MantCargoListComponent implements OnInit {

  constructor(
    private _route:Router
  )
  {

  }

  /**
   * FIXME: ES EL PRIMER EVENTO QUE EJECUTA EL COMPONENTE
   */
  ngOnInit(): void {
    
   
  }

}
