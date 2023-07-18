import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjetafisica',
  templateUrl: './tarjetafisica.component.html',
  styleUrls: ['./tarjetafisica.component.css']
})
export class TarjetafisicaComponent {
  nombreTarjeta: string = '';
  numeroTarjeta: string = '';
  fechaExpiracion: string = '';

  constructor() { }

  guardarDatos() { }
    // Lógica para guardar los datos o realizar otras operaciones
}