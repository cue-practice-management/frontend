import { Component, Input } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';
import { SpinnerComponent } from "@atoms/spinner/spinner.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-metric-card',
  standalone: true,
  imports: [LucideAngularModule, SpinnerComponent, CommonModule],
  templateUrl: './dashboard-metric-card.component.html',
  styleUrl: './dashboard-metric-card.component.scss'
})
export class DashboardMetricCardComponent {
  @Input() title!: string;
  @Input() value?: number;
  @Input() loading = false;
  @Input() icon!: LucideIconData;

}
