import { Component } from '@angular/core';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-lista-tarjetas',
  templateUrl: './lista-tarjetas.component.html',
  styleUrls: ['./lista-tarjetas.component.css']
})
export class ListaTarjetasComponent {
  listTarjetas: any[] = [];

  constructor(private _tarjetaService: TarjetaService) {}

  ngOnInit(): void {
    this.obtenerTarjetas();
  }

  obtenerTarjetas() {
    this._tarjetaService.getListTarjetas().subscribe(data => {
      this.listTarjetas = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  eliminarTarjeta(id: number) {
    this._tarjetaService.deleteTarjeta(id).subscribe(data => {
      this.obtenerTarjetas();
    }, error => {
      console.log(error);
    });
  }

  editarTarjeta(tarjeta: any) {
    // implementa la lógica para editar la tarjeta
  }
}
