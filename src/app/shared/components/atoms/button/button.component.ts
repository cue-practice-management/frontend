import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'success' | 'danger' | 'light' | 'dark' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled = false;
  @Input() fullWidth = false;
  @Input() isLoading = false;

  get buttonClasses(): Record<string, boolean> {
    return {
      [`button--${this.variant}`]: true,
      [`button--${this.size}`]: true,
      'button--full': this.fullWidth,
      'button--loading': this.isLoading,
    };
  }
}