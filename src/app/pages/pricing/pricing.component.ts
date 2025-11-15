import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { WhatsappService } from '../../services/whatsapp.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
})
export class PricingComponent {
  activeTab: '30' | '60' = '30';
  indicatorLeft = 0;
  indicatorWidth = 0;
  showTab: boolean = true;

  @ViewChild('tab30') tab30!: ElementRef<HTMLButtonElement>;
  @ViewChild('tab60') tab60!: ElementRef<HTMLButtonElement>;
  @ViewChild('tabContainer') tabContainer!: ElementRef<HTMLDivElement>;

  ngOnInit() {}

  ngAfterViewInit() {
    this.moveIndicator(this.activeTab);
  }

  switchTab(tab: '30' | '60') {
    this.activeTab = tab;
    this.showTab = tab === '30';
    this.moveIndicator(tab);
  }

  private moveIndicator(tab: '30' | '60') {
    const tabButton =
      tab === '30' ? this.tab30.nativeElement : this.tab60.nativeElement;
    const containerRect =
      this.tabContainer.nativeElement.getBoundingClientRect();
    const tabRect = tabButton.getBoundingClientRect();

    this.indicatorLeft = tabRect.left - containerRect.left;
    this.indicatorWidth = tabRect.width;
  }
  constructor(private whatsapp_service: WhatsappService) {}
  @HostListener('window:resize')
  onResize() {
    this.moveIndicator(this.activeTab);
  }
  handleBooking(
    planName: string,
    duration: string,
    sessions: string,
    price: string
  ) {
    //     const message = `
    // السلام عليكم ورحمة الله وبركاته
    // أرغب في حجز باقة جديدة من "معهد أقرأ"
    // - نوع الباقة: ${planName}
    // - مدة الجلسة: ${duration}
    // - عدد الحصص: ${sessions}
    // - السعر الشهري: ${price} دولار
    // من فضلكم تواصلوا معي لإتمام الحجز. جزاكم الله خيرًا
    //   `;

    const message = `
Peace be upon you
I would like to book a new package from "Iqraa Institute".
- Package Type: ${planName}
- Session Duration: ${duration}
- Number of Classes: ${sessions}
- Monthly Price: ${price} USD
Please contact me to complete the booking. May Allah reward you.
`;
    this.whatsapp_service.openWhatsapp(message);
  }

  faqStates: boolean[] = [];

  toggleFaq(i: number) {
    this.faqStates[i] = !this.faqStates[i];
  }
}
