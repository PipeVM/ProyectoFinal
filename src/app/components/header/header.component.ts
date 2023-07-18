import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  openTwitter() {
    window.open('https://twitter.com/planexware', '_blank');
  }

  openLinkedIn() {
    window.open('https://ar.linkedin.com/company/planexware', '_blank');
  }
}
