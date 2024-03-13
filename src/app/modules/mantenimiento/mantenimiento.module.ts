import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { MantCargoListComponent } from './component/cargo/mant-cargo-list/mant-cargo-list.component';
import { MantCargoRegisterComponent } from './component/cargo/mant-cargo-register/mant-cargo-register.component';
import { MantOrigenListComponent } from './component/origen/mant-origen-list/mant-origen-list.component';
import { MantOrigenRegisterComponent } from './component/origen/mant-origen-register/mant-origen-register.component';


@NgModule({
  declarations: [
    MantCargoListComponent,
    MantCargoRegisterComponent,
    MantOrigenRegisterComponent,
    MantOrigenListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MantenimientoModule { }
