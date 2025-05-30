import { Component, Input } from '@angular/core';
import { DataTableComponent } from "../../../../shared/components/organisms/data-table/data-table.component";
import { ColumnConfig, TableRowAction } from '@/shared/components/organisms/data-table/data-table.models';
import { CompanyContract } from '../../company.models';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { formatDate } from '@angular/common';
import { Edit, Trash } from 'lucide-angular';

@Component({
  selector: 'app-company-contracts-table',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './company-contracts-table.component.html',
  styleUrl: './company-contracts-table.component.scss'
})
export class CompanyContractsTableComponent {
  @Input() contracts: CompanyContract[] = [];
  @Input() loading = false;

  @Input() onAdd!: () => void;
  @Input() onEdit!: (contract: CompanyContract) => void;
  @Input() onDelete!: (contract: CompanyContract) => void;

  get mockedPageData(): PaginatedResult<CompanyContract> {
    return {
      docs: this.contracts,
      totalDocs: this.contracts.length,
      totalPages: 1,
      page: 1,
      limit: this.contracts.length,
    };
  }

  columns: ColumnConfig<CompanyContract>[] = [
    { label: 'Tipo', field: 'type' },
    { label: 'Estado', field: 'status' },
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
      cell: (c) =>
        c.fileUrl
          ? `<a href="${c.fileUrl}" target="_blank">Ver</a>`
          : 'No cargado',
      align: 'center',
    },
  ];

  actions: TableRowAction<CompanyContract>[] = [
    {
      icon: Edit,
      label: 'Editar',
      action: (c) => this.onEdit?.(c),
    },
    {
      icon: Trash,
      label: 'Eliminar',
      action: (c) => this.onDelete?.(c),
      danger: true,
    },
  ];
}