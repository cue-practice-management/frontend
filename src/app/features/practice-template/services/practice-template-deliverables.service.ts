import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreatePracticeTemplateDeliverableRequest, PracticeTemplateDeliverable, PracticeTemplateDeliverableFilter, UpdatePracticeTemplateDeliverableRequest } from '../practice-template.models';
import { Observable } from 'rxjs';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { objectToHttpParams } from '@/core/utils/http-params.util';
import { API_ENDPOINTS } from '@/core/constants/api-endpoints.constants';

@Injectable({
  providedIn: 'root'
})
export class PracticeTemplateDeliverablesService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getPracticeTemplateDeliverables(practiceTemplateId: string, filter: PracticeTemplateDeliverableFilter): Observable<PaginatedResult<PracticeTemplateDeliverable>> {
    const params = objectToHttpParams(filter);
    return this.http.get<PaginatedResult<PracticeTemplateDeliverable>>(API_ENDPOINTS.PRACTICE_TEMPLATE.DELIVERABLES.GET(practiceTemplateId), { params });
  }

  createPracticeTemplateDeliverable(practiceTemplateId: string, deliverable: CreatePracticeTemplateDeliverableRequest): Observable<PracticeTemplateDeliverable> {
    return this.http.post<PracticeTemplateDeliverable>(API_ENDPOINTS.PRACTICE_TEMPLATE.DELIVERABLES.CREATE(practiceTemplateId), deliverable);
  }

  updatePracticeTemplateDeliverable(practiceTemplateId: string, deliverableId: string, deliverable: UpdatePracticeTemplateDeliverableRequest): Observable<PracticeTemplateDeliverable> {
    return this.http.put<PracticeTemplateDeliverable>(API_ENDPOINTS.PRACTICE_TEMPLATE.DELIVERABLES.UPDATE(practiceTemplateId, deliverableId), deliverable);
  }

  deletePracticeTemplateDeliverable(practiceTemplateId: string, deliverableId: string): Observable<void> {
    return this.http.delete<void>(API_ENDPOINTS.PRACTICE_TEMPLATE.DELIVERABLES.DELETE(practiceTemplateId, deliverableId));
  }
}
