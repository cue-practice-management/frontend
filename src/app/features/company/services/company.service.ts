import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company, CompanyFilter, CreateCompanyRequest, UpdateCompanyRequest } from '../company.models';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { objectToHttpParams } from '@/core/utils/http-params.util';
import { API_ENDPOINTS } from '@/core/constants/api-endpoints.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private http: HttpClient
  ) { }

  getCompanies(filter: CompanyFilter): Observable<PaginatedResult<Company>> {
    const params = objectToHttpParams(filter);
    return this.http.get<PaginatedResult<Company>>(API_ENDPOINTS.COMPANY.GET, { params });
  }

  createCompany(createCompanyRequest: CreateCompanyRequest): Observable<Company> {
    return this.http.post<Company>(API_ENDPOINTS.COMPANY.CREATE, createCompanyRequest);
  }

  updateCompany(id: string, updateCompanyRequest: UpdateCompanyRequest): Observable<Company> {
    return this.http.put<Company>(API_ENDPOINTS.COMPANY.UPDATE(id), updateCompanyRequest);
  }

  deleteCompany(id: string): Observable<void> {
    return this.http.delete<void>(API_ENDPOINTS.COMPANY.DELETE(id));
  }
}
