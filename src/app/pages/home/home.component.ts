import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { AboutChildComponent } from './components/about-child/about-child.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutChildComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
