import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardChartData, DashboardGeneralMetrics } from '../dashboard.models';
import { API_ENDPOINTS } from '@/core/constants/api-endpoints.constants';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getGeneralMetrics(): Observable<DashboardGeneralMetrics> {
    return this.http.get<DashboardGeneralMetrics>(API_ENDPOINTS.DASHBOARD.GET_GENERAL_METRICS);
  }

  getStudentsByProgram(): Observable<DashboardChartData[]> {
    return this.http.get<DashboardChartData[]>(API_ENDPOINTS.DASHBOARD.GET_STUDENTS_BY_PROGRAM_CHART);
  }

  getStudentsWithCompanyAndWithoutCompany(): Observable<DashboardChartData[]> {
    return this.http.get<DashboardChartData[]>(API_ENDPOINTS.DASHBOARD.GET_STUDENTS_WITH_COMPANY_AND_WITHOUT_COMPANY);
  }

  getCompaniesByProgram(): Observable<DashboardChartData[]> {
    return this.http.get<DashboardChartData[]>(API_ENDPOINTS.DASHBOARD.GET_COMPANIES_BY_PROGRAM_CHART);
  }

  getCompaniesByCity(): Observable<DashboardChartData[]> {
    return this.http.get<DashboardChartData[]>(API_ENDPOINTS.DASHBOARD.GET_COMPANIES_BY_CITY_CHART);
  }
}
