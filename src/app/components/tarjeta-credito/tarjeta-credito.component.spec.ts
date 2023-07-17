import { TestBed } from '@angular/core/testing';
import { TarjetaCreditoComponent } from './tarjeta-credito.component';

describe('TarjetaCreditoComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [TarjetaCreditoComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TarjetaCreditoComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TarjetaCreditoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Formulario app is running!');
  });
});
