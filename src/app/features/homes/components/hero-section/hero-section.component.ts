import { Component } from '@angular/core';
import { SectionWrapperComponent } from "@/shared/atoms/section-wrapper/section-wrapper.component";
import { HeroSectionBentoComponent } from "./hero-section-bento/hero-section-bento.component";

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [SectionWrapperComponent, HeroSectionBentoComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

}
