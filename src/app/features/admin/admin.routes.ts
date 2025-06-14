import { Routes } from "@angular/router";
import { COMPANY_ID_PARAM, PRACTICE_TEMPLATE_ID_PARAM, STUDENT_ID_PARAM } from "./admin.constants";

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
                path: `students/:${STUDENT_ID_PARAM}`,
                loadComponent: () => import('./pages/admin-student-detail-page/admin-student-detail-page.component').then(m => m.AdminStudentDetailPageComponent),
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
            },
            {
                path: 'student-company-linking-process',
                loadComponent: () => import('./pages/admin-student-company-linking-process-page/admin-student-company-linking-process-page.component').then(m => m.AdminStudentCompanyLinkingProcessPageComponent),
            },
            {
                path: 'news',
                loadComponent: () => import('./pages/admin-news-page/admin-news-page.component').then(m => m.AdminNewsPageComponent),
            },
            {
                path: 'student-company-contracts',
                loadComponent: () => import('./pages/admin-student-company-contract-page/admin-student-company-contract-page.component').then(m => m.AdminStudentCompanyContractPageComponent),
            },
            {
                path: 'practice-templates',
                loadComponent: () => import('./pages/admin-practice-template-page/admin-practice-template-page.component').then(m => m.AdminPracticeTemplatePageComponent),
            },
            {
                path: `practice-templates/:${PRACTICE_TEMPLATE_ID_PARAM}`,
                loadComponent: () => import('./pages/admin-practice-template-detail-page/admin-practice-template-detail-page.component').then(m => m.AdminPracticeTemplateDetailPageComponent),
            },
            {
                path: 'practice-definitions',
                loadComponent: () => import('./pages/admin-practice-definition-page/admin-practice-definition-page.component').then(m => m.AdminPracticeDefinitionPageComponent),
            },
            {
                path: 'practice-processes',
                loadComponent: () => import('./pages/admin-practice-process-page/admin-practice-process-page.component').then(m => m.AdminPracticeProcessPageComponent),
            }
        ]
    }

]