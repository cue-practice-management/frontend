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
import { ModalService } from '@/core/services/modal.service';
import { FacultyFormComponent } from '../faculty-form/faculty-form.component';
import { ConfirmDialogComponent } from '@/shared/components/molecules/confirm-dialog/confirm-dialog.component';
import { PaginationQuery } from '@/core/models/pagination-query.model';

@Component({
  selector: 'app-faculty-table',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './faculty-table.component.html',
  styleUrl: './faculty-table.component.scss'
})
export class FacultyTableComponent extends RetrievePaginatedData<Faculty, FacultyFilter> implements OnInit {
  @Input() allowedActions?: TableAction[];
  override filter: FacultyFilter = DEFAULT_QUERY_PAGINATION;
  readonly columns: ColumnConfig<Faculty>[] = [
    { label: 'Nombre', field: 'name', sortable: true },
    { label: 'Descripción', field: 'description', sortable: true },
    { label: 'Decano', cell: (f) => `${f.deanName} (${f.deanEmail})` }
  ];

  constructor(private facultyService: FacultyService, private modalService: ModalService) {
    super();
  }

  ngOnInit(): void {
    this.loadPageData(this.filter);
  }

  get actions(): TableRowAction<Faculty>[] {
    const list: TableRowAction<Faculty>[] = [];

    if (this.allowedActions?.includes(TableAction.EDIT)) {
      list.push({
        label: 'Editar',
        icon: Edit,
        action: (faculty) => this.editFaculty(faculty)
      });
    }

    if (this.allowedActions?.includes(TableAction.DELETE)) {
      list.push({
        label: 'Eliminar',
        icon: Trash,
        danger: true,
        action: (faculty) => this.deleteFaculty(faculty)
      });
    }

    return list;
  }

  realoadData(): void {
    this.loadPageData(this.filter);
  }

  override fetchPage(filter: FacultyFilter): Observable<PaginatedResult<Faculty>> {
    return this.facultyService.getFaculties(filter);
  }

  onPaginationChange(query: PaginationQuery): void {
    this.loadPageData({...this.filter, ...query });
  }

  private editFaculty(faculty: Faculty): void {
    this.modalService.open(FacultyFormComponent, {
      data: {
        faculty
      }
    }).afterClosed()
      .subscribe((result) => {
        if (result) {
          this.loadPageData(this.filter);
        }
      });
  }

  private deleteFaculty(faculty: Faculty): void {
    this.modalService
      .open(ConfirmDialogComponent, {
        data: {
          confirmDialogData: {
            title: '¿Eliminar facultad?',
            message: `¿Estás seguro de eliminar la facultad "${faculty.name}"?`,
            confirmText: 'Eliminar',
            cancelText: 'Cancelar',
            danger: true
          }

        }
      })
      .afterClosed()
      .subscribe((confirmed) => {
        if (confirmed) {
          this.facultyService.deleteFaculty(faculty._id).subscribe(() => this.realoadData());
        }
      });
  }
}