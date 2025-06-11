import { Component } from '@angular/core';
import { AdminEntityPageComponent } from "../../components/admin-entity-page/admin-entity-page.component";
import { AdminEntityPageConfig } from '../../admin.models';
import { PracticeTemplate, PracticeTemplateFilter } from '@/features/practice-template/practice-template.models';
import { PracticeTemplateTableComponent } from '@/features/practice-template/components/practice-template-table/practice-template-table.component';
import { PracticeTemplateFormComponent } from '@/features/practice-template/components/practice-template-form/practice-template-form.component';
import { TableAction } from '@/shared/models/table-actions.enum';

@Component({
  selector: 'app-admin-practice-template-page',
  standalone: true,
  imports: [AdminEntityPageComponent],
  templateUrl: './admin-practice-template-page.component.html',
  styleUrl: './admin-practice-template-page.component.scss'
})
export class AdminPracticeTemplatePageComponent {
  practiceTemplatePageConfig: AdminEntityPageConfig<PracticeTemplate, PracticeTemplateFilter> = {
    title: 'Plantillas de Práctica',
    description: 'Gestiona las plantillas o configuraciones de práctica para crear prácticas personalizadas',
    createButtonLabel: 'Crear plantilla de práctica',
    tableComponent: PracticeTemplateTableComponent,
    formComponent: PracticeTemplateFormComponent,
    allowedActions: [TableAction.EDIT, TableAction.DELETE],
  };
}
