import { Component } from '@angular/core';
import { AdminEntityPageConfig } from '../../admin.models';
import { CompanyTableComponent } from '@/features/company/components/company-table/company-table.component';
import { CompanyFormComponent } from '@/features/company/components/company-form/company-form.component';
import { TableAction } from '@/shared/models/table-actions.enum';
import { Company, CompanyFilter } from '@/features/company/company.models';
import { AdminEntityPageComponent } from "../../components/admin-entity-page/admin-entity-page.component";

@Component({
  selector: 'app-admin-company-page',
  standalone: true,
  imports: [AdminEntityPageComponent],
  templateUrl: './admin-company-page.component.html',
  styleUrl: './admin-company-page.component.scss'
})
export class AdminCompanyPageComponent {

  companyPageConfig: AdminEntityPageConfig<Company, CompanyFilter> = {
    title: 'Empresas',
    description: 'Gestiona las empresas asociadas a la institución',
    createButtonLabel: 'Crear Empresa',
    tableComponent: CompanyTableComponent,
    formComponent: CompanyFormComponent,
    allowedActions: [TableAction.EDIT, TableAction.DELETE],
    modalWidth: '800px',
  }
}
