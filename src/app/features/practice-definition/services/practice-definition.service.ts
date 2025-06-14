import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreatePracticeDefinitionRequest, PracticeDefinition, PracticeDefinitionFilter, UpdatePracticeDefinitionRequest } from '../practice-definition.models';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '@/core/constants/api-endpoints.constants';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { objectToHttpParams } from '@/core/utils/http-params.util';
import { TypeaheadItem } from '@/shared/models/typeahead-item.model';

@Injectable({
  providedIn: 'root'
})
export class PracticeDefinitionService {

  constructor(
    private readonly http: HttpClient
  ) { }

  createPracticeDefinition(practiceDefinition: CreatePracticeDefinitionRequest): Observable<PracticeDefinition> {
    return this.http.post<PracticeDefinition>(API_ENDPOINTS.PRACTICE_DEFINITION.CREATE, practiceDefinition);
  }

  getPracticeDefinitionsByCriteria(filter: PracticeDefinitionFilter): Observable<PaginatedResult<PracticeDefinition>> {
    const params = objectToHttpParams(filter);
    return this.http.get<PaginatedResult<PracticeDefinition>>(API_ENDPOINTS.PRACTICE_DEFINITION.GET, { params });
  }

  getPracticeDefinitionTypeahead(query: string): Observable<TypeaheadItem[]> {
    const params = { query };
    return this.http.get<TypeaheadItem[]>(API_ENDPOINTS.PRACTICE_DEFINITION.GET_TYPEAHEAD, { params });
  }

  updatePracticeDefinition(id: string, practiceDefinition: UpdatePracticeDefinitionRequest): Observable<PracticeDefinition> {
    return this.http.put<PracticeDefinition>(API_ENDPOINTS.PRACTICE_DEFINITION.UPDATE(id), practiceDefinition);
  }

  deletePracticeDefinition(id: string): Observable<void> {
    return this.http.delete<void>(API_ENDPOINTS.PRACTICE_DEFINITION.DELETE(id));
  }

}
