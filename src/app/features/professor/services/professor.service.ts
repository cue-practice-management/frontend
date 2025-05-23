import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProfessorRequest, Professor, ProfessorFilter, UpdateProfessorRequest } from '../professor.models';
import { objectToHttpParams } from '@/core/utils/http-params.util';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { API_ENDPOINTS } from '@/core/constants/api-endpoints.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  getProfessors(professorFilter: ProfessorFilter): Observable<PaginatedResult<Professor>> {
    const params = objectToHttpParams(professorFilter);
    return this.http.get<PaginatedResult<Professor>>(API_ENDPOINTS.PROFESSOR.GET, { params });
  }

  creatProfessor(createProfessorRequest: CreateProfessorRequest): Observable<Professor> {
    return this.http.post<Professor>(API_ENDPOINTS.PROFESSOR.CREATE, createProfessorRequest);
  }

  updateProfessor(id: string, updateProfessorRequest: UpdateProfessorRequest): Observable<Professor> {
    return this.http.put<Professor>(API_ENDPOINTS.PROFESSOR.UPDATE(id), updateProfessorRequest);
  }

  deleteProfessor(id: string): Observable<void> {
    return this.http.delete<void>(API_ENDPOINTS.PROFESSOR.DELETE(id));
  }
}
