import { Routes } from '@angular/router';
import { HomePageComponent } from './features/homes/pages/home-page/home-page.component';
import { ADMIN_PREFFIX, AUTH_PREFFIX, NOT_FOUND_PREFFIX, STUDENT_PREFFIX } from './core/constants/routes.constants';
import { MainLayoutComponent } from './shared/components/layouts/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
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
        path: NOT_FOUND_PREFFIX,
        loadChildren: () => import('./features/not-found/not-found.routes').then(m => m.NOT_FOUND_ROUTES)
    },
];
