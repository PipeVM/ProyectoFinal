import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCreditoFormComponent } from './tarjeta-credito-form.component';

describe('TarjetaCreditoFormComponent', () => {
  let component: TarjetaCreditoFormComponent;
  let fixture: ComponentFixture<TarjetaCreditoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetaCreditoFormComponent]
    });
    fixture = TestBed.createComponent(TarjetaCreditoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
