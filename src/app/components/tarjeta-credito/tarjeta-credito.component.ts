import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent {
  userForm: FormGroup;
  listaTarjetas: any[] = [];
  accion = 'Agregar';
  expirationValue: string = '';

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      dni: ['', Validators.required],
      cardNumber: ['', Validators.required],
      fullName: ['', Validators.required],
      expiration: ['', Validators.required],
      securityCode: ['', Validators.required]
    });
  }

  guardarTarjeta() {
    if (this.userForm.valid) {
      const nuevaTarjeta = {
        dni: this.userForm.value.dni,
        cardNumber: this.userForm.value.cardNumber,
        fullName: this.userForm.value.fullName,
        expiration: this.userForm.value.expiration,
        securityCode: this.userForm.value.securityCode
      };

      this.listaTarjetas.push(nuevaTarjeta);
      this.userForm.reset();
    }
  }

  handleExpirationInput(value: string) {
    const formattedValue = value.replace(/[^0-9]/g, '');
    this.expirationValue = formattedValue;
    this.userForm.get('expiration')?.setValue(formattedValue);
  }
}
