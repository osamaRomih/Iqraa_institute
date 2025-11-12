import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { WhatsappService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  menuOpen = false;
  // activeSection: string = '';

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    const navCenter = document.querySelector('.nav-center');
    if (navCenter) {
      navCenter.classList.toggle('active', this.menuOpen);
    }
  }

  constructor(private whatsapp_service: WhatsappService) {}
  goToWhatsapp() {
    // const message = 'السلام عليكم، أرغب بتجربة أول حصة مجانية من معهد اقرأ.';
    const message =
      'I would like to try the first free lesson from the Iqraa Institute';
    this.whatsapp_service.openWhatsapp(message);
  }

  scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    //  this.activeSection = sectionId;
  }
}
