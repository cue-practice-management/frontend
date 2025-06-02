import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompanyMentor, CompanyMentorFilter, CreateCompanyMentorRequest, UpdateCompanyMentorRequest } from '../company-mentor.models';
import { Observable } from 'rxjs';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { objectToHttpParams } from '@/core/utils/http-params.util';
import { API_ENDPOINTS } from '@/core/constants/api-endpoints.constants';

@Injectable({
  providedIn: 'root'
})
export class CompanyMentorService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  getCompanyMentors(companyMentorFilter: CompanyMentorFilter): Observable<PaginatedResult<CompanyMentor>> {
    const params = objectToHttpParams(companyMentorFilter);

    return this.http.get<PaginatedResult<CompanyMentor>>(API_ENDPOINTS.COMPANY_MENTOR.GET, { params });
  }

  createCompanyMentor(companyMentor: CreateCompanyMentorRequest): Observable<CompanyMentor> {
    return this.http.post<CompanyMentor>(API_ENDPOINTS.COMPANY_MENTOR.CREATE, companyMentor);
  }

  updateCompanyMentor(id: string, companyMentor: UpdateCompanyMentorRequest): Observable<CompanyMentor> {
    return this.http.put<CompanyMentor>(API_ENDPOINTS.COMPANY_MENTOR.UPDATE(id), companyMentor);
  }

  deleteCompanyMentor(id: string): Observable<void> {
    return this.http.delete<void>(API_ENDPOINTS.COMPANY_MENTOR.DELETE(id));
  }
}