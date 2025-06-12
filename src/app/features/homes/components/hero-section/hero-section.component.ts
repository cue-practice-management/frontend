import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInScale } from '@/shared/animations/enter-animations';
import { ButtonComponent } from "@atoms/button/button.component";

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  animations: [
    trigger('fadeInScale', [
      transition(':enter', useAnimation(fadeInScale, { params: { duration: '500ms' } }))
    ])
  ]
})
export class HeroSectionComponent {
  title = 'Gestión de Prácticas Profesionales';
  tagline = 'Una plataforma para gestionar las prácticas profesionales de manera eficiente y efectiva.';
  ctaButtonText = 'Iniciar Sesión';
}
