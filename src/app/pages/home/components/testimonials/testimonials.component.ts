import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappService } from '../../../../services/whatsapp.service';
@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: ' Othman Syed',
      message:
        'The Islamic studies courses offered by this institute are comprehensive and insightful. I appreciate the affordable rates and the high quality of education        provided. Highly recommended!',
    },
    {
      name: 'أحمد من القاهرة',
      message:
        'فعلاً معهد اقراء ممتاز، حسيت بتحسن كبير في التجويد، المعلمون متميزين جدًا!',
    },
    {
      name: ' Maya Mariee  ',
      message:
        'As a new Muslim convert, I found the courses here incredibly helpful. The supportive environment and expert instructors have made my learning journey smooth and enriching.',
    },
    {
      name: 'منى من الإسكندرية',
      message: 'حبيت الدروس أونلاين، الأوقات مرنة والمعلمين صبورين مع ابنائي.',
    },
    {
      name: ' أحمد محمد ',
      message:
        'I have been attending the Arabic courses here and have seen tremendous improvement. The certified Al-Azhar teachers are knowledgeable and patient, making learning enjoyable and effective.',
    },
    {
      name: 'يوسف من الجيزة',
      message: 'المنصة سهلة وبسيطة، والتقارير الشهرية تساعدني أعرف مستوى ابني.',
    },
  ];

  constructor(private whatsapp_service: WhatsappService) {}
  goToWhatsapp() {
    const message = "Hello I'd like to get a free trial from Iqraa Institute.";
    this.whatsapp_service.openWhatsapp(message);
  }
}
