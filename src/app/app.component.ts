import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // constructor(private translate: TranslateService) {
  //   translate.addLangs(['en', 'ar']);
  //   translate.setDefaultLang('en');
  //   const browserLang = translate.getBrowserLang();
  //   translate.use(browserLang?.match(/en|ar/) ? browserLang : 'en');
  // }
  // switchLang(lang: string) {
  //   this.translate.use(lang);
  // }
}
