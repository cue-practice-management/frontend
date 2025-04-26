import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { guestGuard } from '@/core/guards/guest.guard';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    canActivate:[guestGuard],
    component: LoginPageComponent
  }
];