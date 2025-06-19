import { Component, OnInit } from '@angular/core';
import { DashboardChartData } from '../../dashboard.models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DashboardService } from '../../services/dashboard.service';
import { ToastService } from '@/core/services/toast.service';
import { EChartsOption } from 'echarts';
import { RetrieveData } from '@/shared/abstracts/retrieve-data';
import { DashboardChartCardComponent } from "../dashboard-chart-card/dashboard-chart-card.component";
import { ChartOptionsBuilder } from '@/core/utils/chart-options-builder.utils';

@Component({
  selector: 'app-dashboard-companies-by-city-map',
  standalone: true,
  imports: [DashboardChartCardComponent],
  templateUrl: './dashboard-companies-by-city-map.component.html',
  styleUrl: './dashboard-companies-by-city-map.component.scss'
})
export class DashboardCompaniesByCityMapComponent extends RetrieveData<DashboardChartData[]> implements OnInit {
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
    return this.dashboardService.getCompaniesByCity();
  }

  protected override onDataLoaded(data: DashboardChartData[]): void {
    this.data = data;
    this.chartOptions = new ChartOptionsBuilder()
      .barHorizontal()
      .setLabels(data.map(d => d.name))
      .setValues(data.map(d => d.value))
      .setColor('#003f70')
      .setName('Empresas')
      .build();
  }

  protected override onError(): void {
  }
}
