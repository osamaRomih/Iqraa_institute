import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WhatsappService } from '../../../../services/whatsapp.service';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss',
})
export class PackagesComponent {
  activeTab: '30' | '60' = '30';
  showTab: boolean = true;

  constructor(private whatsapp_service: WhatsappService) {}
  ngAfterViewInit() {
    this.moveIndicator(this.activeTab);
  }

  switchTab(tab: '30' | '60') {
    this.activeTab = tab;
    this.showTab = tab === '30';
    this.moveIndicator(tab);
  }

  private moveIndicator(tab: '30' | '60') {
    const indicator = document.getElementById('tab-indicator');
    const tabButton = document.getElementById(`tab-${tab}`);

    if (indicator && tabButton) {
      const tabRect = tabButton.getBoundingClientRect();
      const containerRect = tabButton.parentElement!.getBoundingClientRect();

      const left = tabRect.left - containerRect.left;
      const width = tabRect.width;

      indicator.style.left = `${left}px`;
      indicator.style.width = `${width}px`;
    }
  }

  handleBooking(
    planName: string,
    duration: string,
    sessions: string,
    price: string
  ) {
    const message = `
السلام عليكم ورحمة الله وبركاته
أرغب في حجز باقة جديدة من "معهد أقرأ"
- نوع الباقة: ${planName}
- مدة الجلسة: ${duration}
- عدد الحصص: ${sessions}
- السعر الشهري: ${price} دولار
من فضلكم تواصلوا معي لإتمام الحجز. جزاكم الله خيرًا
  `;
    this.whatsapp_service.openWhatsapp(message);
  }
}
