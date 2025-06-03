import { Component } from '@angular/core';
import { AdminEntityPageConfig } from '../../admin.models';
import { TableAction } from '@/shared/models/table-actions.enum';
import { AdminEntityPageComponent } from "../../components/admin-entity-page/admin-entity-page.component";
import { ProfessorTableComponent } from '@/features/professor/components/professor-table/professor-table.component';
import { ProfessorFilterComponent } from '@/features/professor/components/professor-filter/professor-filter.component';
import { Professor, ProfessorFilter } from '@/features/professor/professor.models';
import { ProfessorFormComponent } from '@/features/professor/components/professor-form/professor-form.component';

@Component({
  selector: 'app-admin-professor-page',
  standalone: true,
  imports: [AdminEntityPageComponent],
  templateUrl: './admin-professor-page.component.html',
  styleUrl: './admin-professor-page.component.scss'
})
export class AdminProfessorPageComponent {

  professorPageConfig: AdminEntityPageConfig<Professor, ProfessorFilter> = {
    title: 'Profesores',
    description: 'Gestiona los profesores de la institución',
    createButtonLabel: 'Crear profesor',
    tableComponent: ProfessorTableComponent,
    formComponent: ProfessorFormComponent,
    filterComponent: ProfessorFilterComponent,
    allowedActions: [TableAction.EDIT, TableAction.DELETE],
    modalWidth: '800px',
  }
}
