import { Component } from '@angular/core';
import { AdminEntityPageComponent } from "../../components/admin-entity-page/admin-entity-page.component";
import { AdminEntityPageConfig } from '../../admin.models';
import { StudentCompanyLinkingProcess, StudentCompanyLinkingProcessFilter } from '@/features/student-company-linking-process/student-company-linking-process.models';
import { StudentCompanyLinkingProcessTableComponent } from '@/features/student-company-linking-process/components/student-company-linking-process-table/student-company-linking-process-table.component';
import { StudentCompanyLinkingProcessFormComponent } from '@/features/student-company-linking-process/components/student-company-linking-process-form/student-company-linking-process-form.component';
import { StudentCompanyLinkingProcessFilterComponent } from '@/features/student-company-linking-process/components/student-company-linking-process-filter/student-company-linking-process-filter.component';
import { TableAction } from '@/shared/models/table-actions.enum';

@Component({
  selector: 'app-admin-student-company-linking-process-page',
  standalone: true,
  imports: [AdminEntityPageComponent],
  templateUrl: './admin-student-company-linking-process-page.component.html',
  styleUrl: './admin-student-company-linking-process-page.component.scss'
})
export class AdminStudentCompanyLinkingProcessPageComponent {

  linkingProcessPageConfig:AdminEntityPageConfig<StudentCompanyLinkingProcess, StudentCompanyLinkingProcessFilter> = {
      title: 'Procesos de vinculación',
      description: 'Gestiona los procesos de vinculación entre estudiantes y empresas',
      createButtonLabel: 'Iniciar proceso de vinculación',
      tableComponent: StudentCompanyLinkingProcessTableComponent,
      formComponent: StudentCompanyLinkingProcessFormComponent,
      filterComponent: StudentCompanyLinkingProcessFilterComponent,
      allowedActions: [TableAction.EDIT, TableAction.DELETE],
      modalWidth: '800px',
    }

}
