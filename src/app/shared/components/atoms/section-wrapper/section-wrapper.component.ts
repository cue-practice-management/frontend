import { NgClass } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-section-wrapper',
  standalone: true,
  imports: [NgClass],
  templateUrl: './section-wrapper.component.html',
  styleUrl: './section-wrapper.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SectionWrapperComponent {
  @Input() sectionClass: string = '';
  @Input() sectionContentClass: string = '';

}
