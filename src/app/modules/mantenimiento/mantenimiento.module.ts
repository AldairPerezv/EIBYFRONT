import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { MantCargoListComponent } from './component/cargo/mant-cargo-list/mant-cargo-list.component';
import { MantCargoRegisterComponent } from './component/cargo/mant-cargo-register/mant-cargo-register.component';
import { MantOrigenListComponent } from './component/origen/mant-origen-list/mant-origen-list.component';
import { MantOrigenRegisterComponent } from './component/origen/mant-origen-register/mant-origen-register.component';
import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { EibyModaModule } from '../eiby-moda/eiby-moda.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MantCargoListComponent,
    MantCargoRegisterComponent,
    MantOrigenRegisterComponent,
    MantOrigenListComponent
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule,
    SharedModule,
  ]
})
export class MantenimientoModule { }
