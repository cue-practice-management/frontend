import { PaginatedResult } from '@/core/models/paginated-result.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Faculty, FacultyFilter } from '../../faculty.models';
import { ColumnConfig, TableRowAction } from '@/shared/components/organisms/data-table/data-table.models';
import { Edit, Trash } from 'lucide-angular';
import { DataTableComponent } from '@/shared/components/organisms/data-table/data-table.component';
import { RetrievePaginatedData } from '@/shared/abstracts/retrieve-paginated-data';
import { FacultyService } from '../../services/faculty.service';
import { Observable } from 'rxjs';
import { DEFAULT_QUERY_PAGINATION } from '@/core/constants/pagination.constants';
import { TableAction } from '@/shared/models/table-actions.enum';

@Component({
  selector: 'app-faculty-table',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './faculty-table.component.html',
  styleUrl: './faculty-table.component.scss'
})
export class FacultyTableComponent extends RetrievePaginatedData<Faculty, FacultyFilter> implements OnInit {
  @Input() allowedActions?: TableAction[];
  @Output() edit = new EventEmitter<Faculty>();
  @Output() delete = new EventEmitter<Faculty>();

  constructor(private facultyService: FacultyService) {
    super();
  }

  override filter: FacultyFilter = DEFAULT_QUERY_PAGINATION;

  readonly columns: ColumnConfig<Faculty>[] = [
    { label: 'Nombre', field: 'name' },
    { label: 'Descripción', field: 'description' },
    { label: 'Decano', cell: (f) => `${f.deanName} (${f.deanEmail})` }
  ];

  get actions(): TableRowAction<Faculty>[] {
    const list: TableRowAction<Faculty>[] = [];

    if (this.allowedActions?.includes(TableAction.EDIT)) {
      list.push({
        label: 'Editar',
        icon: Edit,
        action: (faculty) => this.edit.emit(faculty)
      });
    }

    if (this.allowedActions?.includes(TableAction.DELETE)) {
      list.push({
        label: 'Eliminar',
        icon: Trash,
        danger: true,
        action: (faculty) => this.delete.emit(faculty)
      });
    }

    return list;
  }

  ngOnInit(): void {
    this.loadPageData(this.filter);
  }

  override fetchPage(filter: FacultyFilter): Observable<PaginatedResult<Faculty>> {
    return this.facultyService.getFaculties(filter);
  }

  onPageChange(page: number): void {
    this.loadPageData({ ...this.filter, page });
  }
}