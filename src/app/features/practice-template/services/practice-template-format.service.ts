import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatePracticeTemplateFormatRequest, PracticeTemplateFormat, PracticeTemplateFormatFilter, UpdatePracticeTemplateFormatRequest } from '../practice-template.models';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { objectToHttpParams } from '@/core/utils/http-params.util';
import { API_ENDPOINTS } from '@/core/constants/api-endpoints.constants';
import { buildFormData } from '@/core/utils/form-data.utils';

@Injectable({
  providedIn: 'root'
})
export class PracticeTemplateFormatService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getPracticeTemplateFormats(practiceTemplateId: string, filter: PracticeTemplateFormatFilter): Observable<PaginatedResult<PracticeTemplateFormat>> {
    const params = objectToHttpParams(filter);
    return this.http.get<PaginatedResult<PracticeTemplateFormat>>(API_ENDPOINTS.PRACTICE_TEMPLATE.FORMATS.GET(practiceTemplateId), { params });
  }

  createPracticeTemplateFormat(practiceTemplateId: string, format: CreatePracticeTemplateFormatRequest): Observable<PracticeTemplateFormat> {
    const formData = buildFormData(format);
    return this.http.post<PracticeTemplateFormat>(API_ENDPOINTS.PRACTICE_TEMPLATE.FORMATS.CREATE(practiceTemplateId), formData);
  }

  updatePracticeTemplateFormat(practiceTemplateId: string, deliverableId: string, format: UpdatePracticeTemplateFormatRequest): Observable<PracticeTemplateFormat> {
  const formData = buildFormData(format);
    return this.http.put<PracticeTemplateFormat>(API_ENDPOINTS.PRACTICE_TEMPLATE.FORMATS.UPDATE(practiceTemplateId, deliverableId), formData);
  }

  deletePracticeTemplateFormat(practiceTemplateId: string, deliverableId: string): Observable<void> {
    return this.http.delete<void>(API_ENDPOINTS.PRACTICE_TEMPLATE.FORMATS.DELETE(practiceTemplateId, deliverableId));
  }

}
