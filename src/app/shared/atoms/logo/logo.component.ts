import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type LogoSize = 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input() size: LogoSize = 'md';

  get logoSizeClass(): string {
    return `logo--${this.size}`;
  }
}