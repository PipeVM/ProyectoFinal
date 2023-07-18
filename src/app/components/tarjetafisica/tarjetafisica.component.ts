import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjetafisica',
  templateUrl: './tarjetafisica.component.html',
  styleUrls: ['./tarjetafisica.component.css']
})
export class TarjetafisicaComponent {
  numeroTarjeta: string = '';
  nombreTarjeta: string = '';
  fechaExpiracion: string = '';

  constructor() { }

  guardarDatos() {
    // Lógica para guardar los datos
  }
}
