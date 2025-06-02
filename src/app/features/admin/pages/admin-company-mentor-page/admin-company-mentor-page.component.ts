import { Component } from '@angular/core';
import { AdminEntityPageComponent } from '../../components/admin-entity-page/admin-entity-page.component';
import { TableAction } from '@/shared/models/table-actions.enum';
import { CompanyMentorTableComponent } from '@/features/company-mentor/components/company-mentor-table/company-mentor-table.component';
import { CompanyMentorFormComponent } from '@/features/company-mentor/components/company-mentor-form/company-mentor-form.component';
import { CompanyMentorFilterComponent } from '@/features/company-mentor/components/company-mentor-filter/company-mentor-filter.component';
import { AdminEntityPageConfig } from '../../admin.models';
import { CompanyMentor, CompanyMentorFilter } from '@/features/company-mentor/company-mentor.models';

@Component({
  selector: 'app-admin-company-mentor-page',
  standalone: true,
  imports: [AdminEntityPageComponent],
  templateUrl: './admin-company-mentor-page.component.html',
  styleUrl: './admin-company-mentor-page.component.scss'
})
export class AdminCompanyMentorPageComponent {

  companyMentorPageConfig: AdminEntityPageConfig<CompanyMentor, CompanyMentorFilter> = {
    title: 'Tutores Empresariales',
    description: 'Gestiona los tutores empresariales de la institución',
    createButtonLabel: 'Crear tutor empresarial',
    tableComponent: CompanyMentorTableComponent,
    formComponent: CompanyMentorFormComponent,
    filterComponent: CompanyMentorFilterComponent,
    allowedActions: [TableAction.EDIT, TableAction.DELETE],
    modalWidth: '800px',
  };

}
