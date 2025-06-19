import { ChartOptionsBuilder } from '@/core/utils/chart-options-builder.utils';
import { Component, OnInit } from '@angular/core';
import { DashboardChartData } from '../../dashboard.models';
import { RetrieveData } from '@/shared/abstracts/retrieve-data';
import { EChartsOption } from 'echarts';
import { DashboardService } from '../../services/dashboard.service';
import { ToastService } from '@/core/services/toast.service';
import { Observable } from 'rxjs';
import { DashboardChartCardComponent } from "../dashboard-chart-card/dashboard-chart-card.component";

@Component({
  selector: 'app-dashboard-students-with-company-donut-chart',
  standalone: true,
  imports: [DashboardChartCardComponent],
  templateUrl: './dashboard-students-with-company-donut-chart.component.html',
  styleUrl: './dashboard-students-with-company-donut-chart.component.scss'
})
export class DashboardStudentsWithCompanyDonutChartComponent extends RetrieveData<DashboardChartData[]> implements OnInit {
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
    return this.dashboardService.getStudentsWithCompanyAndWithoutCompany();
  }

  protected override onDataLoaded(data: DashboardChartData[]): void {
    this.data = data;

    this.chartOptions = new ChartOptionsBuilder()
      .pieDonut()
      .setPieData(data)
      .setPieColors(['#003f70', '#dc3545'])
      .build();

    console.log(this.chartOptions)
  }

  protected override onError(): void {
  }
}
