import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivateStudentCompanyContractRequest, CancelStudentCompanyContractRequest, CreateStudentCompanyContractRequest, StudentCompanyContract, StudentCompanyContractFilter } from '../student-company-contract.models';
import { buildFormData } from '@/core/utils/form-data.utils';
import { API_ENDPOINTS } from '@/core/constants/api-endpoints.constants';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { objectToHttpParams } from '@/core/utils/http-params.util';

@Injectable({
  providedIn: 'root'
})
export class StudentCompanyContractService {

  constructor(
    private readonly http: HttpClient
  ) { }

  createStudentCompanyContract(createStudentCompanyContractRequest: CreateStudentCompanyContractRequest, file?: File): Observable<StudentCompanyContract> {
    const formData = buildFormData(createStudentCompanyContractRequest, file);

    return this.http.post<StudentCompanyContract>(API_ENDPOINTS.STUDENT_COMPANY_CONTRACT.CREATE, formData);
  }

  getStudentCompanyContracts(filter: StudentCompanyContractFilter): Observable<PaginatedResult<StudentCompanyContract>> {
    const params = objectToHttpParams(filter);
    return this.http.get<PaginatedResult<StudentCompanyContract>>(API_ENDPOINTS.STUDENT_COMPANY_CONTRACT.GET, { params });
  }

  activateStudentCompanyContract(contractId: string, activateStudentCompanyContractRequest: ActivateStudentCompanyContractRequest, file?: File): Observable<StudentCompanyContract> {
    return this.http.patch<StudentCompanyContract>(
      API_ENDPOINTS.STUDENT_COMPANY_CONTRACT.ACTIVATE(contractId),
      activateStudentCompanyContractRequest
    );
  }

  cancelStudentCompanyContract(contractId: string, cancelStudentCompanyContractRequest: CancelStudentCompanyContractRequest): Observable<StudentCompanyContract> {
    return this.http.patch<StudentCompanyContract>(
      API_ENDPOINTS.STUDENT_COMPANY_CONTRACT.CANCEL(contractId),
      cancelStudentCompanyContractRequest
    );
  }

  deleteStudentCompanyContract(id: string): Observable<void> {
    return this.http.delete<void>(API_ENDPOINTS.STUDENT_COMPANY_CONTRACT.DELETE(id));
  }

}
