import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { guestGuard } from '@/core/guards/guest.guard';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        canActivate: [guestGuard],
        component: LoginPageComponent
      },
      {
        path: 'recover-password',
        canActivate: [guestGuard],
        loadComponent: () => import('./pages/recover-password-page/recover-password-page.component').then(m => m.RecoverPasswordPageComponent)
      },
      {
        path: 'recover-password/validate',
        canActivate: [guestGuard],
        loadComponent: () => import('./pages/recover-password-validate-page/recover-password-validate-page.component').then(m => m.RecoverPasswordValidatePageComponent)
      },
      {
        path: 'recover-password/reset',
        canActivate: [guestGuard],
        loadComponent: () => import('./pages/recover-password-reset-page/recover-password-reset-page.component').then(m => m.RecoverPasswordResetPageComponent)
      }
    ]
  }

];