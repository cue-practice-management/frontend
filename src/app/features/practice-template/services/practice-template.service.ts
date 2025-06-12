import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreatePracticeTemplateRequest, PracticeTemplate, PracticeTemplateFilter, UpdatePracticeTemplateRequest } from '../practice-template.models';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '@/core/constants/api-endpoints.constants';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { TypeaheadItem } from '@/shared/models/typeahead-item.model';
import { objectToHttpParams } from '@/core/utils/http-params.util';

@Injectable({
  providedIn: 'root'
})
export class PracticeTemplateService {

  constructor(
    private readonly http: HttpClient
  ) { }


  getPracticeTemplates(filter: PracticeTemplateFilter): Observable<PaginatedResult<PracticeTemplate>> {
    const params = objectToHttpParams(filter);
    return this.http.get<PaginatedResult<PracticeTemplate>>(API_ENDPOINTS.PRACTICE_TEMPLATE.GET, { params });
  }
  
  getTypeaheadPracticeTemplates(query:string): Observable<TypeaheadItem[]> {
    return this.http.get<TypeaheadItem[]>(API_ENDPOINTS.PRACTICE_TEMPLATE.GET_TYPEAHEAD, {
      params: { query }
    });
  }

  createPracticeTemplate(template: CreatePracticeTemplateRequest): Observable<PracticeTemplate> {
    return this.http.post<PracticeTemplate>(API_ENDPOINTS.PRACTICE_TEMPLATE.CREATE, template);
  }

  updatePracticeTemplate(id: string, template: UpdatePracticeTemplateRequest): Observable<PracticeTemplate> {
    return this.http.put<PracticeTemplate>(API_ENDPOINTS.PRACTICE_TEMPLATE.UPDATE(id), template);
  }

  deletePracticeTemplate(id: string): Observable<void> {
    return this.http.delete<void>(API_ENDPOINTS.PRACTICE_TEMPLATE.DELETE(id));
  }

  getPracticeTemplateTypeahead(name: string): Observable<TypeaheadItem[]> {
    return this.http.get<TypeaheadItem[]>(API_ENDPOINTS.PRACTICE_TEMPLATE.GET_TYPEAHEAD, { params: { name } });
  }

}
