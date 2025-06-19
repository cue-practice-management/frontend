import { Routes } from '@angular/router';
import { HomePageComponent } from './features/homes/pages/home-page/home-page.component';
import { ADMIN_PREFFIX, AUTH_PREFFIX, NOT_FOUND_PREFFIX, PROFESSOR_PREFFIX, STUDENT_PREFFIX, UNAUTHORIZED_PREFFIX } from './core/constants/routes.constants';
import { MainLayoutComponent } from './shared/components/layouts/main-layout/main-layout.component';
import { guestGuard } from './core/guards/guest.guard';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                canActivate: [guestGuard],
                component: HomePageComponent
            },

        ]
    },
    {
        path: AUTH_PREFFIX,
        loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: ADMIN_PREFFIX,
        loadChildren: () => import('./features/admin/admin.routes').then(m => m.ADMIN_ROUTES)
    },
    {
        path: STUDENT_PREFFIX,
        loadChildren: () => import('./features/student/student.routes').then(m => m.STUDENT_ROUTES)
    },
    {
        path: PROFESSOR_PREFFIX,
        loadChildren: () => import('./features/professor/professor.routes').then(m => m.PROFESSOR_ROUTES)
    },
    {
        path: UNAUTHORIZED_PREFFIX,
        loadChildren: () => import('./features/unauthorized/unauthorized.routes').then(m => m.UNAUTHORIZED_ROUTES)
    },
    {
        path: NOT_FOUND_PREFFIX,
        loadChildren: () => import('./features/not-found/not-found.routes').then(m => m.NOT_FOUND_ROUTES)
    },
];
