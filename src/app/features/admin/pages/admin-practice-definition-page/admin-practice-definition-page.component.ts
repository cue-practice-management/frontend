import { Component } from '@angular/core';
import { AdminEntityPageComponent } from "../../components/admin-entity-page/admin-entity-page.component";
import { AdminEntityPageConfig } from '../../admin.models';
import { PracticeDefinition, PracticeDefinitionFilter } from '@/features/practice-definition/practice-definition.models';
import { PracticeDefinitionTableComponent } from '@/features/practice-definition/components/practice-definition-table/practice-definition-table.component';
import { PracticeDefinitionFormComponent } from '@/features/practice-definition/components/practice-definition-form/practice-definition-form.component';
import { TableAction } from '@/shared/models/table-actions.enum';

@Component({
  selector: 'app-admin-practice-definition-page',
  standalone: true,
  imports: [AdminEntityPageComponent],
  templateUrl: './admin-practice-definition-page.component.html',
  styleUrl: './admin-practice-definition-page.component.scss'
})
export class AdminPracticeDefinitionPageComponent {
  practiceDefinitionPageConfig: AdminEntityPageConfig<PracticeDefinition, PracticeDefinitionFilter> = {
    title: 'Prácticas',
    description: 'Gestiona las prácticas definidas para los estudiantes.',
    createButtonLabel: 'Crear práctica',
    tableComponent: PracticeDefinitionTableComponent,
    formComponent: PracticeDefinitionFormComponent,
    allowedActions: [TableAction.EDIT, TableAction.DELETE],
  };
}
