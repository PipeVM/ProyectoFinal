import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CargatarjetasComponent } from './components/cargatarjetas/cargatarjetas.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';

const routes: Routes = [
  { path: 'carga-de-tarjetas', component: CargatarjetasComponent },
  { path: 'nosotros', component: CarrouselComponent },
  // Otras rutas de tu aplicación
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }