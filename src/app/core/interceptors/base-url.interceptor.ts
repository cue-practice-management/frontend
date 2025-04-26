import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export function baseUrlInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const isRelativeUrl = req.url.startsWith('/'); 

  const updatedReq = isRelativeUrl
    ? req.clone({ url: environment.API_URL + req.url })
    : req;

  return next(updatedReq);
}
