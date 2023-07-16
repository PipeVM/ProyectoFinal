import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  openTwitter() {
    window.open('https://twitter.com/planexware', '_blank');
  }

  openLinkedIn() {
    window.open('https://ar.linkedin.com/company/planexware', '_blank');
  }
}
