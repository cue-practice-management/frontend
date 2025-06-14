import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CancelPracticeProcessRequest, PracticeProcess, PracticeProcessFilter, StartPracticeProcessRequest } from '../practice-process.models';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '@/core/constants/api-endpoints.constants';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { objectToHttpParams } from '@/core/utils/http-params.util';

@Injectable({
  providedIn: 'root'
})
export class PracticeProcessService {

  constructor(
    private readonly http: HttpClient
  ) { }

  startPracticeProcess(startPracticeProcessRequest: StartPracticeProcessRequest): Observable<PracticeProcess> {
    return this.http.post<PracticeProcess>(API_ENDPOINTS.PRACTICE_PROCESS.START, startPracticeProcessRequest);
  }

  cancelPracticeProcess(id: string, cancelPracticeProcessRequest: CancelPracticeProcessRequest): Observable<PracticeProcess> {
    return this.http.post<PracticeProcess>(API_ENDPOINTS.PRACTICE_PROCESS.CANCEL(id), cancelPracticeProcessRequest);
  }

  getPracticeProcesses(filter: PracticeProcessFilter): Observable<PaginatedResult<PracticeProcess>> {
    const params = objectToHttpParams(filter);
    return this.http.get<PaginatedResult<PracticeProcess>>(API_ENDPOINTS.PRACTICE_PROCESS.GET, { params });
  }

  deletePracticeProcess(id: string): Observable<void> {
    return this.http.delete<void>(API_ENDPOINTS.PRACTICE_PROCESS.DELETE(id));
  }
  
}
