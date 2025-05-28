import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideAngularModule, LucideIconData, LucideIconNode } from 'lucide-angular';

@Component({
  selector: 'app-auth-card',
  standalone: true,
  imports: [
    LucideAngularModule,
    CommonModule
  ],
  templateUrl: './auth-card.component.html',
  styleUrl: './auth-card.component.scss'
})
export class AppAuthCardComponent {
  @Input() title!: string;
  @Input() subtitle?: string;
  @Input() icon?: LucideIconData;
}