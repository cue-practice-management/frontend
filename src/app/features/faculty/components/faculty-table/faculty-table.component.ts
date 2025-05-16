import { PaginatedResult } from '@/core/models/paginated-result.model';
import { Component, Input, OnInit } from '@angular/core';
import { Faculty, FacultyFilter } from '../../faculty.models';
import { ColumnConfig, TableRowAction } from '@/shared/components/organisms/data-table/data-table.models';
import { DataTableComponent } from '@/shared/components/organisms/data-table/data-table.component';
import { FacultyService } from '../../services/faculty.service';
import { Observable } from 'rxjs';
import { TableAction } from '@/shared/models/table-actions.enum';
import { ModalService } from '@/core/services/modal.service';
import { FacultyFormComponent } from '../faculty-form/faculty-form.component';

import { DataTable } from '@/shared/abstracts/data-table.abstract';

@Component({
  selector: 'app-faculty-table',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './faculty-table.component.html',
  styleUrl: './faculty-table.component.scss'
})
export class FacultyTableComponent extends DataTable<Faculty, FacultyFilter> implements OnInit {
  override entityName = 'Facultad';
  override entityKeyName = 'faculty';
  override formComponent = FacultyFormComponent;
  @Input() override allowedActions = [TableAction.EDIT, TableAction.DELETE];

  readonly columns: ColumnConfig<Faculty>[] = [
    { label: 'Nombre', field: 'name', sortable: true },
    { label: 'Descripción', field: 'description', sortable: true },
    { label: 'Decano', cell: (f) => `${f.deanName} (${f.deanEmail})` }
  ];

  constructor(private facultyService: FacultyService, modalService: ModalService) {
    super(modalService);
  }

  ngOnInit(): void {
    this.loadPageData(this.filter);
  }

  override getAll(filter: FacultyFilter): Observable<PaginatedResult<Faculty>> {
    return this.facultyService.getFaculties(filter);
  }

  override delete(id: string): Observable<void> {
    return this.facultyService.deleteFaculty(id);
  }

  get actions(): TableRowAction<Faculty>[] {
    return this.getTableActions();
  }

}
