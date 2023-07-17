import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TarjetaService } from 'src/app/services/tarjeta.service';


@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent {
  form: FormGroup;
  listTarjetas: any[] = [];
  accion = 'Agregar';
  id: number | undefined;
  expirationValue: string = '';

  constructor(private fb: FormBuilder,
    private _tarjetaService: TarjetaService) {
    this.form = this.fb.group({
      dni: ['', Validators.required, Validators.maxLength(8), Validators.minLength(7), 
      Validators.pattern('[0-9]*')],
      numeroTarjeta: ['', Validators.required, Validators.maxLength(16), Validators.minLength(16), 
      Validators.pattern('[0-9]*')],
      titular: ['', Validators.required],
      fechaExpiracionMes: ['', Validators.required,, Validators.maxLength(2), Validators.minLength(1),
      Validators.pattern('[0-9]*')],
      fechaExpiracionAnio: ['', Validators.required,, Validators.maxLength(2), Validators.minLength(1),
      Validators.pattern('[0-9]*')],
      cvv: ['', Validators.required, Validators.maxLength(3), Validators.minLength(3),
      Validators.pattern('[0-9]*')]
    });
  }

ngOnInit(): void { 
    this.obtenerTarjetas();  
}
obtenerTarjetas() {
 this._tarjetaService.getListTarjetas().subscribe(data => {
 this.listTarjetas = data;
  console.log(data);

  }, error => {
    console.log(error);
 })
}
  guardarTarjeta() {
    const tarjeta: any = {
      dni: this.form.get('dni')?.value, // Agregue el DNI
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracionMes: this.form.get('fechaExpiracion')?.value, // Cambie Fecha a Mes
      fechaExpiracionAnio: this.form.get('fechaExpiracion')?.value, // Cambie Fecha a Anio
      cvv: this.form.get('cvv')?.value,
    }

  if(this.id == undefined) {
    // agregamos una nueva tarjeta
    this._tarjetaService.saveTarjeta(tarjeta).subscribe(data => {
    /*  this.toastr.success('La tarjeta fue registrada exitosamente.', '¡Tarjeta Registrada!'); */
      this.obtenerTarjetas();
      this.form.reset();
    }, error => {
    /*  this.toastr.error('La tarjeta no pudo cargarse de forma correcta','Error') */
      console.log(error);
    })
} else {
      // editar tarjeta
      tarjeta.id = this.id
      this._tarjetaService.updateTarjeta(this.id, tarjeta).subscribe(data => {
        this.form.reset();
        this.accion = 'Agregar';
        this.id = undefined;
      /*  this.toastr.info('La tarjeta fue actualizada exitosamente', 'Tarjeta Actualizada'); */
        this.obtenerTarjetas();
      }, error => {
        console.log(error);
      })
    }

  }
  eliminarTarjeta(id: number) {
  // this.listTarjetas.splice(index, 1);
  this._tarjetaService.deleteTarjeta(id). subscribe(data => {
  /* this.toastr.error('La tarjeta fue eliminada exitosamente.', '¡Tarjeta Eliminada!'); */
    this.obtenerTarjetas();
  }, error => {
    console.log(error);
 }) 
  }

  editarTarjeta(tarjeta: any) {
    this.accion = "Editar"
    this.id = tarjeta.id;

    this.form.patchValue({
     dni: tarjeta.dni, // Agregue el DNI
     titular: tarjeta.titular,
     numeroTarjeta: tarjeta.numeroTarjeta,
     fechaExpiracionMes: tarjeta.fechaExpiracionMes,
     fechaExpiracionAnio: tarjeta.fechaExpiracion,
     cvv: tarjeta.cvv
    })
  }
}