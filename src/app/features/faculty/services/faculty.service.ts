import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateFacultyRequest, Faculty, FacultyFilter } from '../faculty.models';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { API_ENDPOINTS } from '@/core/constants/api-endpoints.constants';
import { objectToHttpParams } from '@/core/utils/http-params.util';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private http: HttpClient) { }

  getFaculties(filter: FacultyFilter): Observable<PaginatedResult<Faculty>> {
    const params = objectToHttpParams(filter);
    return this.http.get<PaginatedResult<Faculty>>(API_ENDPOINTS.FACULTY.GET, { params });
  }

  createFaculty(createFacultyRequest: CreateFacultyRequest): Observable<Faculty> {
    return this.http.post<Faculty>(API_ENDPOINTS.FACULTY.CREATE, createFacultyRequest);
  }
}