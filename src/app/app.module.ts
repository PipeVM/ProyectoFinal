import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TarjetaCreditoComponent } from './components/tarjeta-credito/tarjeta-credito.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListaTarjetasComponent } from './components/lista-tarjetas/lista-tarjetas.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaCreditoComponent,
    InicioComponent,
    ListaTarjetasComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
