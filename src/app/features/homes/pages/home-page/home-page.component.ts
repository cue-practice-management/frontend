import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";
import { AboutSectionComponent } from "../../components/about-section/about-section.component";
import { FeaturesSectionComponent } from "../../components/features-section/features-section.component";
import { TestimonialsSectionComponent } from "../../components/testimonials-section/testimonials-section.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroSectionComponent, AboutSectionComponent, FeaturesSectionComponent, TestimonialsSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
