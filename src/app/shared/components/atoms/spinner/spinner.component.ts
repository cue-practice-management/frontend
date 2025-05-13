import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' = 'md';
  @Input() color: 'primary' | 'white' | 'gray' = 'primary';
  @Input() label?: string;
}