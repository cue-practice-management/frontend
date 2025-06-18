import { Routes } from '@angular/router';


export const PROFESSOR_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./layouts/professor-layout/professor-layout.component').then(m => m.ProfessorLayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/professor-home-page/professor-home-page.component').then(m => m.ProfessorHomePageComponent)
            },
            {
                path: 'practice-processes/:id',
                loadComponent: () => import('../practice-process/pages/practice-process-detail-page/practice-process-detail-page.component').then(m => m.PracticeProcessDetailPageComponent)
            }

        ]
    }
];