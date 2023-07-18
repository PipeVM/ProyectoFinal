import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';

import { AppComponent } from './app.component';
import { ListaTarjetasComponent } from './components/lista-tarjetas/lista-tarjetas.component';
import { TarjetafisicaComponent } from './components/tarjetafisica/tarjetafisica.component';
import { TarjetaCreditoFormComponent } from './components/tarjeta-credito-form/tarjeta-credito-form.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTarjetasComponent,
    TarjetafisicaComponent,
    TarjetaCreditoFormComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
