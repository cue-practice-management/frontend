import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ArrowLeft, ArrowRight, LucideAngularModule, MessageSquareQuote, QuoteIcon, TextQuote } from 'lucide-angular';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.scss'
})
export class TestimonialsSectionComponent implements OnInit {
  testimonialsTitle = 'Testimonios de Usuarios';
  testimonialsSubtitle = 'Descubre cómo nuestra plataforma ha transformado la experiencia de gestión de prácticas profesionales para estudiantes, universidades y empresas.';

  activeTestimonialIndex = 0;
  autoplayInterval: any;

  testimonials = [
    {
      quote: "La plataforma ha transformado la forma en que gestionamos las prácticas profesionales. Ahora podemos conectar fácilmente a estudiantes con oportunidades relevantes y hacer un seguimiento de su progreso.",
      name: "Juan Gerardo",
      role: "Estudiante de Ingeniería de Software",
      avatar: "assets/images/testimonials/testimonial-1.jpg"
    },
    {
      quote: "Como estudiante, la plataforma me ha facilitado encontrar prácticas que se alinean con mis intereses y habilidades. La interfaz es intuitiva y el proceso de postulación es muy sencillo.",
      name: "Samuel Berrio",
      role: "Estudiante de Administración de Empresas",
      avatar: "assets/images/testimonials/testimonial-2.png"
    },
    {
      quote: "La gestión de prácticas en nuestra empresa ha mejorado significativamente. La plataforma nos permite evaluar a los candidatos de manera eficiente y mantener una comunicación fluida con las universidades.",
      name: "David Gomez",
      role: "CEO, GreenSwap.xyz",
      avatar: "assets/images/testimonials/testimonial-3.png"
    }
  ];

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  startAutoplay(): void {
    this.autoplayInterval = setInterval(() => {
      this.nextTestimonial();
    }, 5000);
  }

  stopAutoplay(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  selectTestimonial(index: number): void {
    this.activeTestimonialIndex = index;
    this.stopAutoplay();
    this.startAutoplay();
  }

  previousTestimonial(): void {
    this.activeTestimonialIndex = (this.activeTestimonialIndex === 0)
      ? this.testimonials.length - 1
      : this.activeTestimonialIndex - 1;
    this.stopAutoplay();
    this.startAutoplay();
  }

  nextTestimonial(): void {
    this.activeTestimonialIndex = (this.activeTestimonialIndex === this.testimonials.length - 1)
      ? 0
      : this.activeTestimonialIndex + 1;
    this.stopAutoplay();
    this.startAutoplay();
  }

  QuoteIcon = MessageSquareQuote;
  LeftArrowIcon = ArrowLeft;
  RightArrowIcon = ArrowRight; 
}
