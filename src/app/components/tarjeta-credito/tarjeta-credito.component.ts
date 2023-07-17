import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
  user!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.user = this.fb.group({
      dni: ['', [Validators.required, Validators.minLength(2)]],
      cardNumber: ['', Validators.required],
      fullName: ['', Validators.required],
      expiration: this.fb.group({
        month: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])$')]],
        year: ['', [Validators.required, Validators.pattern('^\\d{4}$')]]
      }),
      securityCode: ['', Validators.required]
    });
  }

  onSubmit() {
    // Handle form submission logic here
  }

  handleExpirationInput(target: any) {
    const value = target.value;
    const formattedValue = value.replace(/[^0-9]/g, '');
    const month = formattedValue.substr(0, 2);
    const year = formattedValue.substr(2, 4);

    this.user.controls['expiration'].get('month')?.setValue(month);
    this.user.controls['expiration'].get('year')?.setValue(year);
  }
}