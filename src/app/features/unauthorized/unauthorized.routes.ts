import { Routes } from '@angular/router';

export const UNAUTHORIZED_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/unauthorized-page/unauthorized-page.component').then(m => m.UnauthorizedPageComponent)
    }

]