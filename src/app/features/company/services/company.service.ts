import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company, CompanyContract, CompanyDetail, CompanyFilter, CreateCompanyContractRequest, CreateCompanyRequest, UpdateCompanyRequest } from '../company.models';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { objectToHttpParams } from '@/core/utils/http-params.util';
import { API_ENDPOINTS } from '@/core/constants/api-endpoints.constants';
import { Observable } from 'rxjs';
import { buildFormData } from '@/core/utils/form-data.utils';

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

  getCompanyById(id: string): Observable<CompanyDetail> {
    return this.http.get<CompanyDetail>(API_ENDPOINTS.COMPANY.GET_BY_ID(id));
  }

  createCompany(createCompanyRequest: CreateCompanyRequest): Observable<Company> {
    return this.http.post<Company>(API_ENDPOINTS.COMPANY.CREATE, createCompanyRequest);
  }

  updateCompany(id: string, updateCompanyRequest: UpdateCompanyRequest): Observable<Company> {
    return this.http.put<Company>(API_ENDPOINTS.COMPANY.UPDATE(id), updateCompanyRequest);
  }

  updateCompanyLogo(companyiId: string, data: FormData): Observable<Company> {
    return this.http.patch<Company>(API_ENDPOINTS.COMPANY.UPDATE_LOGO(companyiId), data);
  }

  deleteCompany(id: string): Observable<void> {
    return this.http.delete<void>(API_ENDPOINTS.COMPANY.DELETE(id));
  }

  createCompanyContract(companyId: string, dto: CreateCompanyContractRequest, file?: File): Observable<CompanyContract> {
    const formData = buildFormData(dto, file);
    return this.http.post<CompanyContract>(
      API_ENDPOINTS.COMPANY.CREATE_CONTRACT(companyId),
      formData
    );
  }
}
