import { ButtonComponent } from '@/shared/components/atoms/button/button.component';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-section-wrapper',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './admin-section-wrapper.component.html',
  styleUrl: './admin-section-wrapper.component.scss'
})
export class AdminSectionWrapperComponent {
    @Input() title!: string;

}
