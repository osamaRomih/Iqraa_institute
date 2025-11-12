import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { WhatsappService } from '../../../../services/whatsapp.service';

@Component({
  selector: 'app-choose-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choose-us.component.html',
  styleUrl: './choose-us.component.scss',
  animations: [
    trigger('accordionAnimation', [
      state('closed', style({ height: '0', opacity: 0, padding: '0 20px' })),
      state(
        'open',
        style({ height: '*', opacity: 1, padding: '10px 20px 20px' })
      ),
      transition('closed <=> open', animate('300ms ease-in-out')),
    ]),
  ],
})
export class ChooseUsComponent {
  activeIndex: number | null = null;

  @ViewChild('statsSection') statsSection!: ElementRef;
  constructor(private whatsapp_service: WhatsappService) {}

  stats = [
    { label: 'Students Enrolled', target: 1500, current: 0 },
    { label: 'Certified Tutors', target: 120, current: 0 },
    { label: 'Online lessons', target: 3000, current: 0 },
    { label: 'Supported languages', target: 2, current: 0 },
    { label: 'Years of Excellence', target: 20, current: 0 },
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.startCounting();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(this.statsSection.nativeElement);
  }

  startCounting() {
    this.stats.forEach((stat) => {
      let start = 0;
      const duration = 2000;
      const increment = stat.target / (duration / 20);

      const counter = setInterval(() => {
        start += increment;
        if (start >= stat.target) {
          stat.current = stat.target;
          clearInterval(counter);
        } else {
          stat.current = Math.floor(start);
        }
      }, 20);
    });
  }

  items = [
    {
      title: 'Commitment & Time Value',
      content:
        'Our mission is to maintain discipline and respect for time — ensuring both the teacher and student make the most of every minute.',
    },
    {
      title: 'One-on-One Sessions',
      content:
        'Personalized classes between teacher and student to ensure full attention and steady progress in memorization and recitation.',
    },
    {
      title: 'Special Department for Non-Arabic Speakers',
      content:
        'Available in multiple languages, taught by qualified teachers specialized in teaching Quran to non-native speakers, both Arabs and non-Arabs (Ajam and non-Ajam).',
    },
    // {
    //   title: 'Classes in Arabic Language',
    //   content:
    //     'We provide structured lessons in Arabic to help students master the language of the Qur’an.',
    // },
    // {
    //   title: 'Islamic Studies Courses',
    //   content:
    //     'Comprehensive lessons in Tafsir, Fiqh, and Aqeedah delivered by professional Islamic scholars.',
    // },
    {
      title: 'Arabic Language & Islamic Studies',
      content:
        'We offer structured lessons in Arabic along with comprehensive courses in Tafsir, Fiqh, and Aqeedah — helping students understand and live by the teachings of the Qur’an.',
    },
    // {
    //   title: 'Noorani Qaida for Beginners',
    //   content:
    //     'A strong foundation for reading and pronunciation through the famous Noorani Qaida system.',
    // },
    // {
    //   title: 'Rewards & Certificates',
    //   content:
    //     'Special recognition, rewards, and certificates for high-achieving and dedicated students.',
    // },
    {
      title: 'Certified Curriculum & Books',
      content:
        "We provide an accredited study plan, officially approved materials for every student, and teaching of Al-Qaa'idah Al-Nooriyah.",
    },
    {
      title: 'Regular Assessments',
      content:
        'Monthly progress evaluations and level-based testing to ensure continuous improvement.',
    },
    {
      title: '24/7 Student Support',
      content:
        'Our dedicated support team is available around the clock to assist students and parents anytime.',
    },
  ];

  toggleItem(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  goToWhatsapp() {
    const message =
      'I would like to book an appointment with a tutor to learn the Holy Quran.';
    this.whatsapp_service.openWhatsapp(message);
  }
}
