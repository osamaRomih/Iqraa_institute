import { Component } from '@angular/core';
import { WhatsappService } from '../../../../services/whatsapp.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  constructor(private whatsapp_service: WhatsappService) {}

  goToWhatsapp() {
    const message = 'السلام عليكم، أرغب بتجربة أول حصة مجانية من معهد اقرأ.';
    this.whatsapp_service.openWhatsapp(message);
  }
}
