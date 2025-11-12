import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { AboutChildComponent } from './components/about-child/about-child.component';
import { ChooseUsComponent } from './components/choose-us/choose-us.component';
import { PackagesComponent } from './components/packages/packages.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutChildComponent,
    ChooseUsComponent,
    PackagesComponent,
    TestimonialsComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
