import { Component, OnInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, useAnimation, animation } from '@angular/animations';

const slideInLeft = animation([
  style({ opacity: 0, transform: 'translateX(-40px)' }),
  animate('{{duration}} ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
]);

const slideInRight = animation([
  style({ opacity: 0, transform: 'translateX(40px)' }),
  animate('{{duration}} ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
]);

const fadeInScale = animation([
  style({ opacity: 0, transform: 'scale(0.95)' }),
  animate('{{duration}} ease-out', style({ opacity: 1, transform: 'scale(1)' }))
]);

interface BentoItem {
  backgroundImageUrl?: string;
  title: string;
  description: string;
  counter?: {
    value: string;
    label: string;
  }
  type: string;
  animation: 'slideInLeft' | 'slideInRight' | 'fadeInScale';
  isHeadline?: boolean;
  icon?: string;
}

@Component({
  selector: 'app-hero-section-bento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section-bento.component.html',
  styleUrls: ['./hero-section-bento.component.scss'],
  animations: [
    trigger('slideInLeft', [
      transition(':enter', useAnimation(slideInLeft, { params: { duration: '600ms' } }))
    ]),
    trigger('slideInRight', [
      transition(':enter', useAnimation(slideInRight, { params: { duration: '600ms' } }))
    ]),
    trigger('fadeInScale', [
      transition(':enter', useAnimation(fadeInScale, { params: { duration: '700ms' } }))
    ])
  ]
})
export class HeroSectionBentoComponent implements OnInit {
  @ViewChildren('bentoItem') bentoItemElements!: QueryList<ElementRef>;

  bentoItems: BentoItem[] = [
    {
      backgroundImageUrl: 'assets/images/hero/student.jpg',
      title: 'Registro inteligente',
      description: 'Automatiza el registro de practicantes.',
      counter: {
        value: '+500',
        label: 'estudiantes'
      },
      type: 'a',
      animation: 'slideInLeft'
    },
    {
      backgroundImageUrl: 'assets/images/hero/system-management.jpg',
      title: 'Sistema de gestión avanzada',
      description: 'Innovamos la experiencia de seguimiento académico y profesional.',
      type: 'b',
      animation: 'fadeInScale',
      isHeadline: true
    },
    {
      backgroundImageUrl: 'assets/images/hero/analytics.jpg',
      title: 'Indicadores en tiempo real',
      description: 'Visualiza evaluaciones y rendimiento actual.',
      counter: {
        value: '+300',
        label: 'evaluaciones'
      },
      type: 'c',
      animation: 'slideInRight'
    },
    {
      backgroundImageUrl: 'assets/images/hero/professor.jpg',
      title: 'Panel docente',
      description: 'Acceso directo para asesores académicos.',
      counter: {
        value: '+100',
        label: 'docentes'
      },
      type: 'd',
      animation: 'slideInLeft'
    },
    {
      backgroundImageUrl: 'assets/images/hero/survey.jpg',
      title: 'Encuestas conectadas',
      description: 'Retroalimentación directa de estudiantes.',
      counter: {
        value: '+1200',
        label: 'respuestas'
      },
      type: 'f',
      animation: 'slideInRight'
    }
  ];

  ngOnInit(): void {
    setTimeout(() => this.setupBackgroundImages(), 0);
  }

  ngAfterViewInit(): void {
    this.setupBackgroundImages();
  }

  private setupBackgroundImages(): void {
    document.querySelectorAll('.hero-bento__item--with-bg').forEach(item => {
      const element = item as HTMLElement;
      const bgUrl = element.getAttribute('data-bg-url');
      
      if (bgUrl) {
        element.style.setProperty('--item-bg-image', `url('${bgUrl}')`);
      }
    });
  }
}