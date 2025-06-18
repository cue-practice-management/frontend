import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GradePracticeProcessDeliverableRequest, PracticeProcessDeliverable, SubmitPracticeProcessDeliverableRequest } from '../practice-process.models';
import { buildFormData } from '@/core/utils/form-data.utils';
import { API_ENDPOINTS } from '@/core/constants/api-endpoints.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PracticeProcessDeliverableService {

  constructor(
    private readonly http: HttpClient,
  ) { }


  submitPracticeProcessDeliverable(practiceProcessId: string, deliverableId: string, submitPracticeProcessDeliverableRequest: SubmitPracticeProcessDeliverableRequest): Observable<PracticeProcessDeliverable> {
    const formData = buildFormData(submitPracticeProcessDeliverableRequest);

    return this.http.post<PracticeProcessDeliverable>(API_ENDPOINTS.PRACTICE_PROCESS_DELIVERABLE.SUBMIT(practiceProcessId, deliverableId), formData);
  }

  gradePracticeProcessDeliverable(practiceProcessId: string, deliverableId: string, gradePracticeProcessDeliverableRequest: GradePracticeProcessDeliverableRequest): Observable<PracticeProcessDeliverable> {
    return this.http.post<PracticeProcessDeliverable>(API_ENDPOINTS.PRACTICE_PROCESS_DELIVERABLE.GRADE(practiceProcessId, deliverableId), gradePracticeProcessDeliverableRequest);
  }
}
