import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AcademicProgram, AcademicProgramFilter, CreateAcademicProgramRequest, UpdateAcademicProgramRequest } from '../academic-program.models';
import { Observable } from 'rxjs';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { API_ENDPOINTS } from '@/core/constants/api-endpoints.constants';
import { objectToHttpParams } from '@/core/utils/http-params.util';

@Injectable({
  providedIn: 'root'
})
export class AcademicProgramService {

  constructor(
    private http: HttpClient,
  ) { }

  createAcademicProgram(createAcademicProgramRequest: CreateAcademicProgramRequest): Observable<AcademicProgram> {
    return this.http.post<AcademicProgram>(API_ENDPOINTS.ACADEMIC_PROGRAM.CREATE, createAcademicProgramRequest);
  }

  getAcademicPrograms(academicProgramFilter: AcademicProgramFilter): Observable<PaginatedResult<AcademicProgram>> {
    const params = objectToHttpParams(academicProgramFilter);
    return this.http.get<PaginatedResult<AcademicProgram>>(API_ENDPOINTS.ACADEMIC_PROGRAM.GET, { params });
  }

  updateAcademicProgram(id: string, updateAcademicProgramRequest: UpdateAcademicProgramRequest): Observable<AcademicProgram> {
    return this.http.put<AcademicProgram>(API_ENDPOINTS.ACADEMIC_PROGRAM.UPDATE(id), updateAcademicProgramRequest);
  }

  deleteAcademicProgram(id: string): Observable<void> {
    return this.http.delete<void>(API_ENDPOINTS.ACADEMIC_PROGRAM.DELETE(id));
  }

}
