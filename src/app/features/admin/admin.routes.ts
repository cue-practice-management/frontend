import { Routes } from "@angular/router";

export const ADMIN_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./layout/admin-layout.component').then(m => m.AdminLayoutComponent),
        children: [
            {
                path: 'faculties',
                loadComponent: () => import('./pages/admin-faculty-page/admin-faculty-page.component').then(m => m.AdminFacultyPageComponent),

            },
            {
                path: 'academic-programs',
                loadComponent: () => import('./pages/admin-academic-program-page/admin-academic-program-page.component').then(m => m.AdminAcademicProgramPageComponent),
            },
            {
                path: 'students',
                loadComponent: () => import('./pages/admin-student-page/admin-student-page.component').then(m => m.AdminStudentPageComponent),
            },
            {
                path: 'professors',
                loadComponent: () => import('./pages/admin-professor-page/admin-professor-page.component').then(m => m.AdminProfessorPageComponent),
            }

        ]
    }

]