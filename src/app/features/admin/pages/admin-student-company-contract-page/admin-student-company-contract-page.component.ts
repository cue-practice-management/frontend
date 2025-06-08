import { Component } from '@angular/core';
import { AdminEntityPageComponent } from "../../components/admin-entity-page/admin-entity-page.component";
import { AdminEntityPageConfig } from '../../admin.models';
import { StudentCompanyContract, StudentCompanyContractFilter } from '@/features/student-company-contract/student-company-contract.models';
import { StudentCompanyContractTableComponent } from '@/features/student-company-contract/components/student-company-contract-table/student-company-contract-table.component';
import { StudentCompanyContractFormComponent } from '@/features/student-company-contract/components/student-company-contract-form/student-company-contract-form.component';
import { TableAction } from '@/shared/models/table-actions.enum';
import { StudentCompanyContractFilterComponent } from '@/features/student-company-contract/components/student-company-contract-filter/student-company-contract-filter.component';

@Component({
  selector: 'app-admin-student-company-contract-page',
  standalone: true,
  imports: [AdminEntityPageComponent],
  templateUrl: './admin-student-company-contract-page.component.html',
  styleUrl: './admin-student-company-contract-page.component.scss'
})
export class AdminStudentCompanyContractPageComponent {
  studentCompanyContractPageConfig: AdminEntityPageConfig<StudentCompanyContract, StudentCompanyContractFilter> = {
    title: 'Contratos Estudiante - Empresa',
    description: 'Gestiona los contratos entre estudiantes y empresas',
    createButtonLabel: 'Crear contrato',
    tableComponent: StudentCompanyContractTableComponent,
    filterComponent: StudentCompanyContractFilterComponent,
    formComponent: StudentCompanyContractFormComponent,
    allowedActions: [TableAction.DELETE],
    modalWidth: '800px',
  }
}
