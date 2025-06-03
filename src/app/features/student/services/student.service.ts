import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateStudentRequest, Student, StudentFilter, UpdateStudentRequest } from '../student.model';
import { Observable } from 'rxjs';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { objectToHttpParams } from '@/core/utils/http-params.util';
import { API_ENDPOINTS } from '@/core/constants/api-endpoints.constants';
import { TypeaheadItem } from '@/shared/models/typeahead-item.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  getStudents(studentFilter: StudentFilter): Observable<PaginatedResult<Student>> {
    const params = objectToHttpParams(studentFilter);
    return this.http.get<PaginatedResult<Student>>(API_ENDPOINTS.STUDENT.GET, { params });
  }

  getStudentsTypeahead(query: string): Observable<TypeaheadItem[]> {
    return this.http.get<TypeaheadItem[]>(API_ENDPOINTS.STUDENT.GET_TYPEAHEAD, {
      params: { query }
    });
  }

  createStudent(student: CreateStudentRequest): Observable<Student> {
    return this.http.post<Student>(API_ENDPOINTS.STUDENT.CREATE, student);
  }

  updateStudent(id: string, student: UpdateStudentRequest): Observable<Student> {
    return this.http.put<Student>(API_ENDPOINTS.STUDENT.UPDATE(id), student);
  }

  deleteStudent(id: string): Observable<void> {
    return this.http.delete<void>(API_ENDPOINTS.STUDENT.DELETE(id));
  }
}
