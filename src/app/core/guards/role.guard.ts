import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CurrentUserService } from '../services/current-user.service';
import { UserRole } from '../enums/user-role.enum';

export const roleGuard: CanActivateFn = (route, state) => {
  const currentUserService = inject(CurrentUserService);
  const router = inject(Router);

  const expectedRoles = route.data['roles'] as UserRole[];

  if (!expectedRoles || expectedRoles.length === 0) {
    return true;
  }

  const currentUser = currentUserService.currentUser(); 

  if (!currentUser) {
    return router.navigate(['/auth/login']);
  }

  if (expectedRoles.includes(currentUser.role)) {
    return true;
  }

  router.navigate(['/unauthorized']);
  return false;
};
