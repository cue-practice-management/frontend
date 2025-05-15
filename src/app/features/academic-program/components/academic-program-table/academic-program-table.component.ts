import { Component, Input, OnInit } from '@angular/core';
import { AcademicProgram, AcademicProgramFilter } from '../../academic-program.models';
import { ColumnConfig, TableRowAction } from '@/shared/components/organisms/data-table/data-table.models';
import { DataTableComponent } from '@/shared/components/organisms/data-table/data-table.component';
import { AcademicProgramService } from '../../services/academic-program.service';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { Observable } from 'rxjs';
import { TableAction } from '@/shared/models/table-actions.enum';
import { ModalService } from '@/core/services/modal.service';
import { DEFAULT_QUERY_PAGINATION } from '@/core/constants/pagination.constants';
import { AcademicProgramFormComponent } from '../academic-program-form/academic-program-form.component';
import { DataTable } from '@/shared/abstracts/data-table.abstract';

@Component({
  selector: 'app-academic-program-table',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './academic-program-table.component.html',
  styleUrl: './academic-program-table.component.scss'
})
export class AcademicProgramTableComponent extends DataTable<AcademicProgram, AcademicProgramFilter> implements OnInit {
  override entityName = 'Programa Académico';
  override entityKeyName = 'academicProgram';
  override formComponent = AcademicProgramFormComponent;
  @Input() override allowedActions = [TableAction.EDIT, TableAction.DELETE];

  readonly columns: ColumnConfig<AcademicProgram>[] = [
    { label: 'Nombre', field: 'name', sortable: true },
    { label: 'Descripción', field: 'description', sortable: true },
    {
      label: 'Facultad',
      field: 'faculty',
      sortable: true,
      cell: (program) => program.faculty.name
    },
    {
      label: 'Coordinador',
      field: 'coordinatorName',
      sortable: true,
      cell: (program) => `${program.coordinatorName} (${program.coordinatorEmail})`
    }
  ];

  constructor(private academicProgramService: AcademicProgramService, modalService: ModalService) {
    super(modalService);
  }

  ngOnInit(): void {
    this.loadPageData(this.getInitialFilter());
  }

  reloadPageData(): void {
    this.loadPageData(this.filter);
  }

  override getAll(filter: AcademicProgramFilter): Observable<PaginatedResult<AcademicProgram>> {
    return this.academicProgramService.getAcademicPrograms(filter);
  }

  override delete(id: string): Observable<void> {
    return this.academicProgramService.deleteAcademicProgram(id);
  }

  override getInitialFilter(): AcademicProgramFilter {
    return { ...DEFAULT_QUERY_PAGINATION };
  }

  get actions(): TableRowAction<AcademicProgram>[] {
    return this.getTableActions();
  }
}
