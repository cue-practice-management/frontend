import { Routes } from "@angular/router";
import { COMPANY_ID_PARAM } from "./admin.constants";

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
            },
            {
                path: 'company-mentors',
                loadComponent: () => import('./pages/admin-company-mentor-page/admin-company-mentor-page.component').then(m => m.AdminCompanyMentorPageComponent),
            },
            {
                path: 'companies',
                loadComponent: () => import('./pages/admin-company-page/admin-company-page.component').then(m => m.AdminCompanyPageComponent),
            },
            {
                path: `companies/:${COMPANY_ID_PARAM}`,
                loadComponent: () => import('./pages/admin-company-detail-page/admin-company-detail-page.component').then(m => m.AdminCompanyDetailPageComponent),
            },
            {
                path: 'countries',
                loadComponent: () => import('./pages/admin-country-page/admin-country-page.component').then(m => m.AdminCountryPageComponent),
            },
            {
                path: 'cities',
                loadComponent: () => import('./pages/admin-city-page/admin-city-page.component').then(m => m.AdminCityPageComponent),
            }
        ]
    }

]