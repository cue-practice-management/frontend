import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '@/features/auth/services/auth.service';
import { CurrentUserService } from '../services/current-user.service';
import { UserRole } from '../enums/user-role.enum';

export const guestGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const currentUserService = inject(CurrentUserService);
  const router = inject(Router);

  const currentUser = currentUserService.currentUser();

  if (!authService.getAccessToken()) {
    return true;
  }

  if (currentUser?.role == UserRole.ADMIN) {
    return router.navigate(['/admin']);
  }

  if (currentUser?.role == UserRole.STUDENT) {
    return router.navigate(['/student']);
  }

  if (currentUser?.role == UserRole.PROFESSOR) {
    return router.navigate(['/professor']);
    
  }

  return router.navigate(['/']);

};