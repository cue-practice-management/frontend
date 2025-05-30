import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City, CityFilter, CreateCityRequest, UpdateCityRequest } from '../city.models';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { Observable } from 'rxjs';
import { objectToHttpParams } from '@/core/utils/http-params.util';
import { API_ENDPOINTS } from '@/core/constants/api-endpoints.constants';
import { TypeaheadItem } from '@/shared/models/typeahead-item.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(
    private http: HttpClient
  ) { }

  getCities(filter: CityFilter): Observable<PaginatedResult<City>> {
    const params = objectToHttpParams(filter);
    return this.http.get<PaginatedResult<City>>(API_ENDPOINTS.CITY.GET, { params });
  }

  getTypeaheadCities(query: string, country?:string): Observable<TypeaheadItem[]> {
    const params: { [param: string]: string } = { query };
    if (country !== undefined) {
      params['country'] = country;
    }
    return this.http.get<TypeaheadItem[]>(API_ENDPOINTS.CITY.GET_TYPEAHEAD, {
      params
    });
  }

  createCity(createCityRequest: CreateCityRequest): Observable<City> {
    return this.http.post<City>(API_ENDPOINTS.CITY.CREATE, createCityRequest);
  }

  updateCity(id: string, updateCityRequest: UpdateCityRequest): Observable<City> {
    return this.http.put<City>(API_ENDPOINTS.CITY.UPDATE(id), updateCityRequest);
  }

  deleteCity(id: string): Observable<void> {
    return this.http.delete<void>(API_ENDPOINTS.CITY.DELETE(id));
  }
}
