import { ROUTES } from "@/core/constants/routes.constants";
import { Routes } from "@angular/router";

export const ADMIN_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./layout/admin-layout.component').then(m => m.AdminLayoutComponent),
        children: [
            {
                path: 'faculties',
                loadComponent: () => import('./pages/admin-faculty-page/admin-faculty-page.component').then(m => m.AdminFacultyPageComponent),

            }   

        ]
    }

]