import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { CommonModule } from '@angular/common';

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
      title: 'المرونة في تحديد الأوقات',
      content: 'يتمتع الطالب بحرية اختيار المواعيد المناسبة له بسهولة وراحة.',
    },
    {
      title: 'حلقات فردية بين الطالب والمعلم',
      content:
        'تفاعل مباشر يضمن التركيز الكامل وتقدم مستمر في الحفظ والمراجعة.',
    },
    {
      title: 'دروس متخصصة في العلوم الشرعية',
      content:
        'نقدم دروساً متقنة في التفسير والفقه والعقيدة على أيدي معلمين مؤهلين.',
    },
    {
      title: 'قسم خاص لتعليم الأعاجم',
      content:
        'متاح بجميع اللغات مع مدرّسين متخصصين في تعليم غير الناطقين بالعربية.',
    },
  ];

  toggleItem(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
