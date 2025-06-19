import { ChartOptionsBuilder } from '@/core/utils/chart-options-builder.utils';
import { Component, OnInit } from '@angular/core';
import { DashboardChartData } from '../../dashboard.models';
import { Observable } from 'rxjs';
import { RetrieveData } from '@/shared/abstracts/retrieve-data';
import { EChartsOption } from 'echarts';
import { DashboardService } from '../../services/dashboard.service';
import { ToastService } from '@/core/services/toast.service';
import { DashboardChartCardComponent } from "../dashboard-chart-card/dashboard-chart-card.component";

@Component({
  selector: 'app-dashboard-companies-by-program-chart',
  standalone: true,
  imports: [DashboardChartCardComponent],
  templateUrl: './dashboard-companies-by-program-chart.component.html',
  styleUrl: './dashboard-companies-by-program-chart.component.scss'
})
export class DashboardCompaniesByProgramChartComponent extends RetrieveData<DashboardChartData[]> implements OnInit {
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
    return this.dashboardService.getCompaniesByProgram();
  }

  protected override onDataLoaded(data: DashboardChartData[]): void {
    this.data = data;

    this.chartOptions = new ChartOptionsBuilder()
      .barHorizontal()
      .setLabels(data.map(d => d.name))
      .setValues(data.map(d => d.value))
      .setColor('#003f70')
      .setName('Empresas por programa')
      .build();
  }

  protected override onError(): void { }
}
