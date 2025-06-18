import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CancelPracticeProcessFollowUpRequest, CompletePracticeProcessFollowUpRequest, PracticeProcessFollowUp, SchedulePracticeProcessFollowUpRequest } from '../practice-process.models';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '@/core/constants/api-endpoints.constants';

@Injectable({
  providedIn: 'root'
})
export class PracticeProcessFollowUpService {

  constructor(
    private readonly http: HttpClient
  ) { }

  schedulePracticeProcessFollowUp(practiceProcessId: string, schedulePracticeProcessFollowUpRequest: SchedulePracticeProcessFollowUpRequest): Observable<PracticeProcessFollowUp> {
    return this.http.post<PracticeProcessFollowUp>(API_ENDPOINTS.PRACTICE_PROCESS_FOLLOW_UP.SCHEDULE(practiceProcessId), schedulePracticeProcessFollowUpRequest);
  }

  cancelPracticeProcessFollowUp(practiceProcessId: string, followUpId: string, cancelPracticeProcessFollowUpRequest: CancelPracticeProcessFollowUpRequest): Observable<PracticeProcessFollowUp> {
    return this.http.post<PracticeProcessFollowUp>(API_ENDPOINTS.PRACTICE_PROCESS_FOLLOW_UP.CANCEL(practiceProcessId, followUpId), cancelPracticeProcessFollowUpRequest);
  }

  completePracticeProcessFollowUp(practiceProcessId: string, followUpId: string, completePracticeProcessFollowUpRequest: CompletePracticeProcessFollowUpRequest): Observable<PracticeProcessFollowUp> {
    return this.http.post<PracticeProcessFollowUp>(API_ENDPOINTS.PRACTICE_PROCESS_FOLLOW_UP.COMPLETE(practiceProcessId, followUpId), completePracticeProcessFollowUpRequest);
  }
  
}
