import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateStudentCompanyLinkingProcess, StudentCompanyLinkingProcess, StudentCompanyLinkingProcessFilter, UpdateStudentCompanyLinkingProcessStatus } from '../student-company-linking-process.models';
import { Observable } from 'rxjs';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { objectToHttpParams } from '@/core/utils/http-params.util';
import { API_ENDPOINTS } from '@/core/constants/api-endpoints.constants';

@Injectable({
  providedIn: 'root'
})
export class StudentCompanyLinkingProcessService {

  constructor(
    private readonly http: HttpClient
  ) { }

  createStudentCompanyLinkingProcess(studentCompanyLinkingProcess: CreateStudentCompanyLinkingProcess): Observable<StudentCompanyLinkingProcess> {
    return this.http.post<StudentCompanyLinkingProcess>(API_ENDPOINTS.STUDENT_COMPANY_LINKING_PROCESS.CREATE, studentCompanyLinkingProcess);
  }

  getStudentCompanyLinkingProcesses(filter: StudentCompanyLinkingProcessFilter): Observable<PaginatedResult<StudentCompanyLinkingProcess>> {
    const params = objectToHttpParams(filter);
    return this.http.get<PaginatedResult<StudentCompanyLinkingProcess>>(API_ENDPOINTS.STUDENT_COMPANY_LINKING_PROCESS.GET, { params });
  }

  updateStudentCompanyLinkingProcessStatus(progressId: string, status: UpdateStudentCompanyLinkingProcessStatus): Observable<StudentCompanyLinkingProcess> {
    return this.http.patch<StudentCompanyLinkingProcess>(API_ENDPOINTS.STUDENT_COMPANY_LINKING_PROCESS.UPDATE_STATUS(progressId), status);
  }

  deleteStudentCompanyLinkingProcess(id: string): Observable<void> {
    return this.http.delete<void>(API_ENDPOINTS.STUDENT_COMPANY_LINKING_PROCESS.DELETE(id));
  }
}
