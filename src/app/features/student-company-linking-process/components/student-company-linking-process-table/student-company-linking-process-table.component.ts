import { Component, input, Input, OnInit } from '@angular/core';
import { DataTableComponent } from "@organisms/data-table/data-table.component";
import { StudentCompanyLinkingProcess, StudentCompanyLinkingProcessFilter } from '../../student-company-linking-process.models';
import { TableAction } from '@/shared/models/table-actions.enum';
import { StudentCompanyLinkingProcessFormComponent } from '../student-company-linking-process-form/student-company-linking-process-form.component';
import { DataTable } from '@/shared/abstracts/data-table.abstract';
import { ColumnConfig, TableRowAction } from '@/shared/components/organisms/data-table/data-table.models';
import { ModalService } from '@/core/services/modal.service';
import { StudentCompanyLinkingProcessService } from '../../services/student-company-linking-process.service';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { Observable } from 'rxjs';
import { getStudentCompanyLinkingProcessStatusLabel } from '../../student-company-linking-process.enums';

@Component({
  selector: 'app-student-company-linking-process-table',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './student-company-linking-process-table.component.html',
  styleUrl: './student-company-linking-process-table.component.scss'
})
export class StudentCompanyLinkingProcessTableComponent extends DataTable<StudentCompanyLinkingProcess, StudentCompanyLinkingProcessFilter> implements OnInit {
  override entityName = 'Proceso de vinculación de empresa';
  override entityKeyName = 'studentCompanyLinkingProcess';
  override formComponent = StudentCompanyLinkingProcessFormComponent;
  @Input() override allowedActions: TableAction[] = [TableAction.EDIT, TableAction.DELETE];
  @Input() override filter!: StudentCompanyLinkingProcessFilter;

  readonly columns: ColumnConfig<StudentCompanyLinkingProcess>[] = [
    { label: 'Estudiante', field: 'student', cell: (row) => `${row.student.firstName} ${row.student.lastName}`, sortable: true },
    { label: 'Programa', field: 'student', cell: (row) => row.student.academicProgram.name, sortable: false },
    { label: 'Empresa', field: 'company', cell: (row) => `${row.company.corporateName}`, sortable: true },
    { label: 'Estado', field: 'status', sortable: false, cell: (row) => getStudentCompanyLinkingProcessStatusLabel(row.status) },
  ];

  constructor(private studentCompanyLinkingProcesService: StudentCompanyLinkingProcessService, modalService: ModalService) {
    super(modalService);
  }

  ngOnInit(): void {
    this.loadPageData(this.filter);
  }

  override getAll(filter: StudentCompanyLinkingProcessFilter): Observable<PaginatedResult<StudentCompanyLinkingProcess>> {
    return this.studentCompanyLinkingProcesService.getStudentCompanyLinkingProcesses(filter);
  }

  override delete(id: string): Observable<void> {
    return this.studentCompanyLinkingProcesService.deleteStudentCompanyLinkingProcess(id);
  }

  get actions(): TableRowAction<StudentCompanyLinkingProcess>[] {
    return this.getTableActions();
  }
}
