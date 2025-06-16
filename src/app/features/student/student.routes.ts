import { Routes } from "@angular/router";

export const STUDENT_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./layouts/student-layout/student-layout.component').then(m => m.StudentLayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/student-home-page/student-home-page.component').then(m => m.StudentHomePageComponent)
            },
            {
                path: 'practice-processes/:id',
                loadComponent: () => import('../practice-process/pages/practice-process-detail-page/practice-process-detail-page.component').then(m => m.PracticeProcessDetailPageComponent)
            }
        ]
    }
]