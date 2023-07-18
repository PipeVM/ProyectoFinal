import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-tarjeta-credito-form',
  templateUrl: './tarjeta-credito-form.component.html',
  styleUrls: ['./tarjeta-credito-form.component.css']
})
export class TarjetaCreditoFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private _tarjetaService: TarjetaService) {
    this.form = this.fb.group({
      dni: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(7), Validators.pattern('[0-9]*')]],
      numeroTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16), Validators.pattern('[0-9]*')]],
      titular: ['', Validators.required],
      fechaExpiracion: ['', [Validators.required, Validators.maxLength(2), Validators.minLength(1), Validators.pattern('[0-9]*')]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3), Validators.pattern('[0-9]*')]]
    });
  }

  guardarTarjeta() {
    const tarjeta: any = {
      dni: this.form.get('dni')?.value,
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracionMes: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,
    };

    this._tarjetaService.saveTarjeta(tarjeta).subscribe(data => {
      this.form.reset();
    }, error => {
      console.log(error);
    });
  }
  limpiarFormulario() {
    this.form.reset();
  }
}
