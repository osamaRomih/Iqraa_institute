import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WhatsappService {
  private phoneNumber = '+201002858839';

  openWhatsapp(message: string): void {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  }
}
