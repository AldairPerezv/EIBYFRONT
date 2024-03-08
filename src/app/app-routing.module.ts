import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [

  //ESTO SE LLAMA RUTEO SIMPLE
  {
    path:'', component: WelcomeComponent
  },
  {
    path:'prueba', component: PruebaComponent
  },
  {
    path:'404', component: NotFoundComponent
  },
  //vamos a hacer uso de un lazy loading
  {
    path:'auth', loadChildren:() => import("./modules/auth/auth.module").then( x => x.AuthModule)
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadChildren: () => import("./modules/template/template.module").then(x => x.TemplateModule)
  },
  
  // {
  //   path:'*', redirectTo: '/404'
  // }

];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
