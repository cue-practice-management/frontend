import { Component } from '@angular/core';
import { AdminSectionWrapperComponent } from "../../components/admin-section-wrapper/admin-section-wrapper.component";
import { DashboardMetricCardListComponent } from "../../../dashboard/components/dashboard-metric-card-list/dashboard-metric-card-list.component";
import { DashboardStudentsByProgramChartComponent } from "../../../dashboard/components/dashboard-students-by-program-chart/dashboard-students-by-program-chart.component";
import { DashboardStudentsWithCompanyDonutChartComponent } from "../../../dashboard/components/dashboard-students-with-company-donut-chart/dashboard-students-with-company-donut-chart.component";
import { DashboardCompaniesByProgramChartComponent } from "../../../dashboard/components/dashboard-companies-by-program-chart/dashboard-companies-by-program-chart.component";
import { DashboardCompaniesByCityMapComponent } from "../../../dashboard/components/dashboard-companies-by-city-map/dashboard-companies-by-city-map.component";

@Component({
  selector: 'app-admin-dashboard-page',
  standalone: true,
  imports: [AdminSectionWrapperComponent, DashboardMetricCardListComponent, DashboardStudentsByProgramChartComponent, DashboardStudentsWithCompanyDonutChartComponent, DashboardCompaniesByProgramChartComponent, DashboardCompaniesByCityMapComponent],
  templateUrl: './admin-dashboard-page.component.html',
  styleUrl: './admin-dashboard-page.component.scss'
})
export class AdminDashboardPageComponent {

}
