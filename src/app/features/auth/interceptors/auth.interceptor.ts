import { HttpRequest, HttpHandlerFn, HttpEvent, HttpStatusCode } from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

const TOKEN_PREFIX = 'Bearer';

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const authService = inject(AuthService);

  const token = authService.getAccessToken();

  let authReq = req;
  if (token) {
    authReq = req.clone({
      setHeaders: {
        Authorization: `${TOKEN_PREFIX} ${token}`
      }
    });
  }

  return next(authReq).pipe(
    catchError(error => {
      if (error.status === HttpStatusCode.Unauthorized) {
        return authService.refreshToken().pipe(
          switchMap(() => {
            const newToken = authService.getAccessToken();
            const retryReq = req.clone({
              setHeaders: {
                Authorization: `${TOKEN_PREFIX} ${newToken}`
              }
            });
            return next(retryReq);
          }),
          catchError(err => {
            authService.logout().subscribe();
            return throwError(() => err);
          })
        );
      }

      return throwError(() => error);
    })
  );
}
