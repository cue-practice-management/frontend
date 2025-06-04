import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateNewsRequest, News, NewsFilter, UpdateNewsRequest } from '../news.models';
import { API_ENDPOINTS } from '@/core/constants/api-endpoints.constants';
import { objectToHttpParams } from '@/core/utils/http-params.util';
import { buildFormData } from '@/core/utils/form-data.utils';
import { Observable } from 'rxjs';
import { PaginatedResult } from '@/core/models/paginated-result.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private readonly http: HttpClient
  ) { }

  createNews(news: CreateNewsRequest, file?: File): Observable<News> {
    const formData = buildFormData(news, file);
    return this.http.post<News>(API_ENDPOINTS.NEWS.CREATE, formData);
  }

  getNews(filter: NewsFilter): Observable<PaginatedResult<News>> {
    const params = objectToHttpParams(filter);
    return this.http.get<PaginatedResult<News>>(API_ENDPOINTS.NEWS.GET, { params });
  }

  updateNews(newsId: string, news: UpdateNewsRequest, file?: File): Observable<News> {
    const formData = buildFormData(news, file);
    return this.http.put<News>(API_ENDPOINTS.NEWS.UPDATE(newsId), formData);
  }

  deleteNews(newsId: string): Observable<void> {
    return this.http.delete<void>(API_ENDPOINTS.NEWS.DELETE(newsId));
  }
}
