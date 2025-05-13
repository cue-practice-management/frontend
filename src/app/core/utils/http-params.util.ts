import { HttpParams } from '@angular/common/http';

export function objectToHttpParams(filter: Record<string, any>): HttpParams {
  let params = new HttpParams();

  Object.entries(filter).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      params = params.set(key, value);
    }
  });

  return params;
}
