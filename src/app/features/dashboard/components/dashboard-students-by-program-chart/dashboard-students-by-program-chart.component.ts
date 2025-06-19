import { RetrieveData } from '@/shared/abstracts/retrieve-data';
import { Component } from '@angular/core';
import { DashboardChartData } from '../../dashboard.models';
import { DashboardService } from '../../services/dashboard.service';
import { ToastService } from '@/core/services/toast.service';
import { Observable } from 'rxjs';
import { ChartOptionsBuilder } from '@/core/utils/chart-options-builder.utils';
import { EChartsOption } from 'echarts';
import { DashboardChartCardComponent } from '../dashboard-chart-card/dashboard-chart-card.component';

@Component({
  selector: 'app-dashboard-students-by-program-chart',
  standalone: true,
  imports: [DashboardChartCardComponent],
  templateUrl: './dashboard-students-by-program-chart.component.html',
  styleUrl: './dashboard-students-by-program-chart.component.scss'
})
export class DashboardStudentsByProgramChartComponent extends RetrieveData<DashboardChartData[]> {
  data: DashboardChartData[] | null = null;
  chartOptions!: EChartsOption;
  
  constructor(
    private readonly dashboardService: DashboardService,
    toastService: ToastService

  ) {
    super(toastService);
  }

  ngOnInit(): void {
    this.loadData();
  }

  protected override fetchData(): Observable<DashboardChartData[]> {
    return this.dashboardService.getStudentsByProgram();
  }

  protected override onDataLoaded(data: DashboardChartData[]): void {
    this.data = data;

    this.chartOptions = new ChartOptionsBuilder()
      .barVertical()
      .setLabels(data.map(d => d.name))
      .setValues(data.map(d => d.value))
      .setColor('#003f70')
      .setBarWidth('30%')
      .setName('Estudiantes')
      .build();
  }

  protected override onError(): void {
  }


}
