import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantCargoListComponent } from './component/cargo/mant-cargo-list/mant-cargo-list.component';
import { MantOrigenListComponent } from './component/origen/mant-origen-list/mant-origen-list.component';

const routes: Routes = [

  {
    path:'cargo', component:MantCargoListComponent
  },
  {
    path:'origen', component:MantOrigenListComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
