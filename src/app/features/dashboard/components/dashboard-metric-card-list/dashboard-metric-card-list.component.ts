import { RetrieveData } from '@/shared/abstracts/retrieve-data';
import { Component, OnInit } from '@angular/core';
import { DashboardGeneralMetrics } from '../../dashboard.models';
import { DashboardService } from '../../services/dashboard.service';
import { ToastService } from '@/core/services/toast.service';
import { Observable } from 'rxjs';
import { DashboardMetricCardComponent } from "../dashboard-metric-card/dashboard-metric-card.component";
import { AlertCircle, Briefcase, Building, CircleSlashIcon, Glasses, GraduationCap, UserLock } from 'lucide-angular';

@Component({
  selector: 'app-dashboard-metric-card-list',
  standalone: true,
  imports: [DashboardMetricCardComponent],
  templateUrl: './dashboard-metric-card-list.component.html',
  styleUrl: './dashboard-metric-card-list.component.scss'
})
export class DashboardMetricCardListComponent extends RetrieveData<DashboardGeneralMetrics> implements OnInit {
  metrics: DashboardGeneralMetrics | null = null;

  constructor(
    private readonly dashboardService: DashboardService,
    toastService: ToastService

  ) {
    super(toastService);
  }

  ngOnInit(): void {
    this.loadData();
  }

  protected override fetchData(): Observable<DashboardGeneralMetrics> {
    return this.dashboardService.getGeneralMetrics();
  }

  protected override onDataLoaded(data: DashboardGeneralMetrics): void {
    this.metrics = data;
  }

  protected override onError(): void {
  }

  studentIcon = GraduationCap;
  alertIcon = AlertCircle;
  teacherIcon = UserLock;
  companyIcon = Building;
  briefCaseIcon = Briefcase;
}
