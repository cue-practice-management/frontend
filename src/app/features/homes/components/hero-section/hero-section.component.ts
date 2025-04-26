import { Component } from '@angular/core';
import { HeroSectionBentoComponent } from "./hero-section-bento/hero-section-bento.component";
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInScale } from '@/shared/animations/enter-animations';
import { SectionWrapperComponent } from '@/shared/components/atoms/section-wrapper/section-wrapper.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [SectionWrapperComponent, HeroSectionBentoComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  animations: [
    trigger('fadeInScale', [
      transition(':enter', useAnimation(fadeInScale, { params: { duration: '500ms' } }))
    ])
  ]
})
export class HeroSectionComponent {

}
