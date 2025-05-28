import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country, CountryFilter, CreateCountryRequest, UpdateCountryRequest } from '../country.models';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { Observable } from 'rxjs';
import { objectToHttpParams } from '@/core/utils/http-params.util';
import { API_ENDPOINTS } from '@/core/constants/api-endpoints.constants';
import { TypeaheadItem } from '@/shared/models/typeahead-item.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private http: HttpClient
  ) { }

  getCountries(filter: CountryFilter): Observable<PaginatedResult<Country>> {
    const params = objectToHttpParams(filter);
    return this.http.get<PaginatedResult<Country>>(API_ENDPOINTS.COUNTRY.GET, { params });
  }

  getTypeaheadCountries(query: string): Observable<TypeaheadItem[]> {
    return this.http.get<TypeaheadItem[]>(API_ENDPOINTS.COUNTRY.GET_TYPEAHEAD, {
      params: { query }
    });
  }

  createCountry(createCountryRequest: CreateCountryRequest): Observable<Country> {
    return this.http.post<Country>(API_ENDPOINTS.COUNTRY.CREATE, createCountryRequest);
  }

  updateCountry(id: string, updateCountryRequest: UpdateCountryRequest): Observable<Country> {
    return this.http.put<Country>(API_ENDPOINTS.COUNTRY.UPDATE(id), updateCountryRequest);
  }

  deleteCountry(id: string): Observable<void> {
    return this.http.delete<void>(API_ENDPOINTS.COUNTRY.DELETE(id));
  }
}
