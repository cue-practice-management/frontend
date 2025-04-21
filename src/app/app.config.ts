import { APP_INITIALIZER, ApplicationConfig, inject } from '@angular/core';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './features/auth/interceptors/auth.interceptor';
import { baseUrlInterceptor } from './core/interceptors/base-url.interceptor';
import { CurrentUserService } from './core/services/current-user.service';
import { catchError, firstValueFrom, of } from 'rxjs';
import { AuthService } from './features/auth/services/auth.service';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations'; 

function initializeApp(): () => Promise<void> {
  const authService = inject(AuthService);
  const currentUserService = inject(CurrentUserService);

  return async () => {
    try {
      const refresh = await firstValueFrom(
        authService.refreshToken().pipe(
          catchError(() => {
            return of(null); 
          })
        )
      );

      if (refresh?.accessToken) {
        await currentUserService.loadCurrentUser();
      } else {
        currentUserService.clear(); 
      }
    } catch (e) {
      currentUserService.clear();
    }
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(
      withInterceptors([
        baseUrlInterceptor,
        authInterceptor
      ])
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: []
    }
  ]
};