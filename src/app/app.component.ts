import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WhatsappService } from './services/whatsapp.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showScrollTop = false;

  // constructor(private translate: TranslateService) {
  //   translate.addLangs(['en', 'ar']);
  //   translate.setDefaultLang('en');
  //   const browserLang = translate.getBrowserLang();
  //   translate.use(browserLang?.match(/en|ar/) ? browserLang : 'en');
  // }
  // switchLang(lang: string) {
  //   this.translate.use(lang);
  // }

  constructor(private whatsapp_service: WhatsappService) {}

  goToWhatsapp() {
    // const message = 'السلام عليكم، أود حجز موعد مع معلم لتحفيظ القرآن الكريم.';

    const message =
      'I would like to book an appointment with a teacher to memorize the Holy Quran.';
    this.whatsapp_service.openWhatsapp(message);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollTop = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
