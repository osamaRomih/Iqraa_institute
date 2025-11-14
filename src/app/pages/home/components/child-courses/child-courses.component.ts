import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WhatsappService } from '../../../../services/whatsapp.service';

@Component({
  selector: 'app-child-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-courses.component.html',
  styleUrl: './child-courses.component.scss',
})
export class ChildCoursesComponent {
  courses = [
    {
      title: 'Islamic Studies Course',
      desc: 'Learn Tafsir, Fiqh, and Aqeedah with highly qualified and certified Azhar teachers.',
      icon: 'assets/images/courses/courses.jpg',
    },
    {
      title: 'Arabic Language Course',
      desc: 'Learn Arabic for understanding the Quran and Islamic texts fluently.',
      icon: 'assets/images/courses/courses.jpg',
    },
    {
      title: 'Quran Ijaza Course',
      desc: 'Earn an authentic Ijaza in Quran with certified reciters.',
      icon: 'assets/images/courses/courses.jpg',
    },
    {
      title: 'Quran Memorization Course (Online)',
      desc: 'Structured memorization plan with daily follow-up and support.',
      icon: 'assets/images/courses/courses.jpg',
    },
    {
      title: 'Quran Reading (Al-Qaida An-Norania)',
      desc: 'Learn Quran reading fluently using the Al-Qaida An-Norania method.',
      icon: 'assets/images/courses/courses.jpg',
    },
    {
      title: 'Quran Tajweed & Recitation Course',
      desc: 'Master the rules of Tajweed and recite beautifully with precision.',
      icon: 'assets/images/courses/courses.jpg',
    },

    {
      title: 'Correct Your Quran Memorization or Recitation (Online)',
      desc: 'Improve your Quran recitation accuracy with certified teachers.',
      icon: 'assets/images/courses/courses.jpg',
    },
  ];
  constructor(private whatsapp_service: WhatsappService) {}

  goToWhatsapp(courseTitle: string) {
    // const message = 'السلام عليكم، أود حجز موعد مع معلم لتحفيظ القرآن الكريم.';
    if (!courseTitle) return; // لو مفيش عنوان، مش هنعمل حاجة

    // الرسالة تشمل اسم الكورس
    const message = `Hello, I would like to subscribe to the course "${courseTitle}" and would like to know more details.`;

    this.whatsapp_service.openWhatsapp(message);
  }
}
