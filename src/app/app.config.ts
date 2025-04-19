import { APP_INITIALIZER, ApplicationConfig, inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './features/auth/interceptors/auth.interceptor';
import { baseUrlInterceptor } from './core/interceptors/base-url.interceptor';
import { CurrentUserService } from './core/services/current-user.service';


function initializeCurrentUser(): () => Promise<void> {
  const currentUserService = inject(CurrentUserService);
  return () => currentUserService.load();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([
        baseUrlInterceptor,
        authInterceptor
      ])
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeCurrentUser,
      multi: true,
      deps: []
    }
  ]
};