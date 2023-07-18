import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargatarjetasComponent } from './cargatarjetas.component';

describe('CargatarjetasComponent', () => {
  let component: CargatarjetasComponent;
  let fixture: ComponentFixture<CargatarjetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargatarjetasComponent]
    });
    fixture = TestBed.createComponent(CargatarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
