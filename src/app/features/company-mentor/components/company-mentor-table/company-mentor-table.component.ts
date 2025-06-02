import { Component, Input, OnInit } from '@angular/core';
import { CompanyMentor, CompanyMentorFilter } from '../../company-mentor.models';
import { DataTable } from '@/shared/abstracts/data-table.abstract';
import { CompanyMentorFormComponent } from '../company-mentor-form/company-mentor-form.component';
import { TableAction } from '@/shared/models/table-actions.enum';
import { ColumnConfig, TableRowAction } from '@/shared/components/organisms/data-table/data-table.models';
import { CompanyMentorService } from '../../services/company-mentor.service';
import { ModalService } from '@/core/services/modal.service';
import { Observable } from 'rxjs';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { DataTableComponent } from "@organisms/data-table/data-table.component";

@Component({
  selector: 'app-company-mentor-table',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './company-mentor-table.component.html',
  styleUrl: './company-mentor-table.component.scss'
})
export class CompanyMentorTableComponent extends DataTable<CompanyMentor, CompanyMentorFilter> implements OnInit {
  override entityName = 'Tutor empresarial';
  override entityKeyName = 'companyMentor';
  override formComponent = CompanyMentorFormComponent;
  @Input() override allowedActions: TableAction[] = [TableAction.EDIT, TableAction.DELETE];

  readonly columns: ColumnConfig<CompanyMentor>[] = [
    { label: 'Nombre', field: 'firstName', sortable: true },
    { label: 'Apellidos', field: 'lastName', sortable: true },
    { label: 'Correo', field: 'email', sortable: false },
    { label: 'Teléfono', field: 'phoneNumber', sortable: false },
    { label: 'Número de documento', field: 'documentNumber', sortable: false },
    { label: 'Empresa', field: 'company', cell: (row) => row.company.name, sortable: true },
    { label: 'Cargo', field: 'position', sortable: false },
  ];

  constructor(private companyMentorService: CompanyMentorService, modalService: ModalService) {
    super(modalService);
  }

  ngOnInit(): void {
    this.loadPageData(this.filter);
  }

  override getAll(filter: CompanyMentorFilter): Observable<PaginatedResult<CompanyMentor>> {
    return this.companyMentorService.getCompanyMentors(filter);
  }

  override delete(id: string): Observable<void> {
    return this.companyMentorService.deleteCompanyMentor(id);
  }

  get actions(): TableRowAction<CompanyMentor>[] {
    return this.getTableActions();
  }
}
