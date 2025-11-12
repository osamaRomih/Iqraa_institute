import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WhatsappService } from '../../../../services/whatsapp.service';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  isSent: boolean = false;

  constructor(private whatsapp_service: WhatsappService) {}
  goToSocial(social: string) {
    if (social === 'whatsapp') {
      window.open(
        'https://wa.me/+201002858839?text=السلام%20عليكم،%20أرغب%20بحجز%20موعد%20مع%20معلم%20لتحفيظ%20القرآن%20الكريم.',
        '_blank'
      );
    } else if (social === 'facebook') {
      window.open(
        'https://www.facebook.com/share/1BGhPKnjbH/?mibextid=wwXIfr',
        '_blank'
      );
    } else if (social === 'instagram') {
      window.open(
        'https://www.instagram.com/iqraa_institute55?igsh=OTlkOGJxdDJ3ZWx0',
        '_blank'
      );
    } else if (social === 'youtube') {
      window.open('https://www.youtube.com/@Iqraa.Institute55', '_blank');
    } else if (social === 'email') {
      window.open(
        'https://mail.google.com/mail/?view=cm&fs=1&to=iqraaacademy55@gmail.com',
        '_blank'
      );
    } else if (social === 'tiktok') {
      window.open(
        'https://www.tiktok.com/@iqraa.institute7?_r=1&_t=ZS-917ZURk2LHc',
        '_blank'
      );
    }
  }

  sendToWhatsApp(form: any) {
    if (form.valid) {
      const { name, email, phone, country, message } = form.value;

      const text =
        `- *New Contact Message!*\n` +
        `- *Name:* ${name}\n` +
        `- *Email:* ${email}\n` +
        `- *Phone:* ${phone}\n` +
        `- *Country:* ${country}\n` +
        `- *Message:* ${message}
         - I would like to book a lesson and would like to know the rest of the details.`;

      this.whatsapp_service.openWhatsapp(text);

      this.isSent = true;

      form.resetForm();

      setTimeout(() => (this.isSent = false), 4000);
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }
}
