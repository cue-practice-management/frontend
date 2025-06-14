import { Component } from '@angular/core';
import { AdminEntityPageComponent } from "../../components/admin-entity-page/admin-entity-page.component";
import { AdminEntityPageConfig } from '../../admin.models';
import { PracticeProcess, PracticeProcessFilter } from '@/features/practice-process/practice-process.models';
import { PracticeProcessTableComponent } from '@/features/practice-process/components/practice-process-table/practice-process-table.component';
import { PracticeProcessStartFormComponent } from '@/features/practice-process/components/practice-process-start-form/practice-process-start-form.component';
import { TableAction } from '@/shared/models/table-actions.enum';
import { PracticeProcessFilterComponent } from '@/features/practice-process/components/practice-process-filter/practice-process-filter.component';

@Component({
  selector: 'app-admin-practice-process-page',
  standalone: true,
  imports: [AdminEntityPageComponent],
  templateUrl: './admin-practice-process-page.component.html',
  styleUrl: './admin-practice-process-page.component.scss'
})
export class AdminPracticeProcessPageComponent {
  practiceProcessPageConfig: AdminEntityPageConfig<PracticeProcess, PracticeProcessFilter> = {
    title: 'Procesos de Práctica',
    description: 'Gestiona los procesos de práctica de los estudiantes',
    createButtonLabel: 'Iniciar Proceso de Práctica',
    tableComponent: PracticeProcessTableComponent,
    formComponent: PracticeProcessStartFormComponent, 
    filterComponent: PracticeProcessFilterComponent,
    allowedActions: [TableAction.DELETE], 
    modalWidth: '800px',
  }

}
