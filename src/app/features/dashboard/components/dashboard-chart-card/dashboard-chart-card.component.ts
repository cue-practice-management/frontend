import { SpinnerComponent } from '@/shared/components/atoms/spinner/spinner.component';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-dashboard-chart-card',
  standalone: true,
  imports: [NgxEchartsModule, CommonModule, SpinnerComponent],
  templateUrl: './dashboard-chart-card.component.html',
  styleUrl: './dashboard-chart-card.component.scss'
})
export class DashboardChartCardComponent {
  @Input() title!: string;
  @Input() loading = false;
  @Input() options!: EChartsOption;
}
