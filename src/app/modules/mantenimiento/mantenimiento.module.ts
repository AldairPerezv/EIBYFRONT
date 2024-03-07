import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { MantCargoListComponent } from './component/cargo/mant-cargo-list/mant-cargo-list.component';
import { MantCargoRegisterComponent } from './component/cargo/mant-cargo-register/mant-cargo-register.component';
import { MantOrigenRegisterComponent } from './component/origen/mant-origen-register/mant-origen-register.component';
import { MantOrigenListComponent } from './component/origen/mant-origen-list/mant-origen-list.component';


@NgModule({
  declarations: [
    MantCargoListComponent,
    MantCargoRegisterComponent,
    MantOrigenRegisterComponent,
    MantOrigenListComponent
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule
  ]
})
export class MantenimientoModule { }
