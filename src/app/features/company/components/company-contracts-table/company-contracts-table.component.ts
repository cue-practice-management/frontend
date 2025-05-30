import { PaginatedResult } from '@/core/models/paginated-result.model';
import { Component, Input, OnInit } from '@angular/core';
import { CompanyContract, CompanyContractFilter } from '../../company.models';
import { ColumnConfig, TableRowAction } from '@/shared/components/organisms/data-table/data-table.models';
import { DataTableComponent } from '@/shared/components/organisms/data-table/data-table.component';
import { Observable } from 'rxjs';
import { ModalService } from '@/core/services/modal.service';
import { CompanyContractFormComponent } from '../company-contract-form/company-contract-form.component';
import { DataTable } from '@/shared/abstracts/data-table.abstract';
import { formatDate } from '@angular/common';
import { CompanyService } from '../../services/company.service';
import { getCompanyContractStatusLabel, getCompanyContractTypeLabel } from '../../company.enums';
import { TableAction } from '@/shared/models/table-actions.enum';

@Component({
  selector: 'app-company-contracts-table',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './company-contracts-table.component.html',
  styleUrl: './company-contracts-table.component.scss'
})
export class CompanyContractsTableComponent extends DataTable<CompanyContract, CompanyContractFilter> implements OnInit {
  override entityName = 'Contrato';
  override entityKeyName = 'contract';
  override formComponent = CompanyContractFormComponent;
  @Input() override allowedActions = [TableAction.EDIT, TableAction.DELETE];
  @Input() companyId!: string;

  readonly columns: ColumnConfig<CompanyContract>[] = [
    {
      label: 'Tipo',
      field: 'type',
      cell: (c) => getCompanyContractTypeLabel(c.type),
    },
    {
      label: 'Estado',
      field: 'status',
      cell: (c) => getCompanyContractStatusLabel(c.status),
    },
    {
      label: 'Fecha Inicio',
      field: 'startDate',
      cell: (c) => formatDate(c.startDate, 'dd/MM/yyyy', 'en-US'),
    },
    {
      label: 'Fecha Fin',
      field: 'endDate',
      cell: (c) => formatDate(c.endDate, 'dd/MM/yyyy', 'en-US'),
    },
    {
      label: 'Documento',
      field: 'fileUrl',
      isFile: true,
    }
  ];

  constructor(private companyService: CompanyService, modalService: ModalService) {
    super(modalService);
  }

  ngOnInit(): void {
    this.loadPageData(this.filter);
  }

  override getAll(filter: CompanyContractFilter): Observable<PaginatedResult<CompanyContract>> {
    return this.companyService.getCompanyContracts(this.companyId, filter);
  }

  override delete(id: string): Observable<void> {
    return this.companyService.deleteCompanyContract(id);
  }

  get actions(): TableRowAction<CompanyContract>[] {
    return this.getTableActions();
  }
}