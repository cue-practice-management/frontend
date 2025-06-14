import { DataTable } from '@/shared/abstracts/data-table.abstract';
import { Component, Input, OnInit } from '@angular/core';
import { PracticeProcess, PracticeProcessFilter } from '../../practice-process.models';
import { ColumnConfig, TableRowAction } from '@/shared/components/organisms/data-table/data-table.models';
import { PracticeProcessService } from '../../services/practice-process.service';
import { ModalService } from '@/core/services/modal.service';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { Observable } from 'rxjs';
import { PracticeProcessStartFormComponent } from '../practice-process-start-form/practice-process-start-form.component';
import { DataTableComponent } from "@organisms/data-table/data-table.component";
import { PRACTICE_PROCESS_STATUS_LABELS, PracticeProcessStatus } from '../../practice-process.enums';
import { PracticeProcessCancelFormComponent } from '../practice-process-cancel-form/practice-process-cancel-form.component';
import { XIcon } from 'lucide-angular';

@Component({
  selector: 'app-practice-process-table',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './practice-process-table.component.html',
  styleUrl: './practice-process-table.component.scss'
})
export class PracticeProcessTableComponent extends DataTable<PracticeProcess, PracticeProcessFilter> implements OnInit {
  @Input() override allowedActions = [];
  override entityKeyName: string = 'practiceProcess';
  override entityName: string = 'Proceso de Práctica';
  override formComponent = PracticeProcessStartFormComponent;

  readonly columns: ColumnConfig<PracticeProcess>[] = [
    { label: 'Estudiante', field: 'student', cell: c => `${c.student.firstName} ${c.student.lastName}`, sortable: true },
    { label: 'Profesor', field: 'professor', cell: c => `${c.professor.firstName} ${c.professor.lastName}`, sortable: true },
    { label: 'Empresa', field: 'company', cell: c => c.company.corporateName, sortable: true },
    { label: 'Definición de Práctica', field: 'practiceDefinition', cell: c => c.practiceDefinition.name, sortable: false },
    { label: 'Fecha Inicio', field: 'startDate', cell: c => new Date(c.startDate).toLocaleDateString(), sortable: true },
    { label: 'Fecha Fin', field: 'endDate', cell: c => new Date(c.endDate).toLocaleDateString(), sortable: true },
    { label: 'Estado', field: 'status', cell: c => PRACTICE_PROCESS_STATUS_LABELS[c.status], sortable: true }
  ]

  constructor(
    private readonly practiceProcessService: PracticeProcessService,
    modalService: ModalService
  ) {
    super(modalService);
  }

  ngOnInit(): void {
    this.loadPageData(this.filter);
  }

  override getAll(filter: PracticeProcessFilter): Observable<PaginatedResult<PracticeProcess>> {
    return this.practiceProcessService.getPracticeProcesses(filter);
  }

  override delete(practiceProcessId: string): Observable<void> {
    return this.practiceProcessService.deletePracticeProcess(practiceProcessId);
  }

  get actions(): TableRowAction<PracticeProcess>[] {
    const actions = this.getTableActions();

    actions.push({
      label: 'Cancelar Proceso',
      icon: XIcon,
      action: (practiceProcess: PracticeProcess) => this.openCancelModal(practiceProcess),
      disabled: (row) => row.status !== PracticeProcessStatus.IN_PROGRESS,
    });

    return actions;
  }


  private openCancelModal(practiceProcess: PracticeProcess): void {
    this.modalService.open(PracticeProcessCancelFormComponent, {
      data: { practiceProcessId: practiceProcess._id },
    }).afterClosed().subscribe(result => {
      if (result) {
        this.loadPageData(this.filter);
      }
    });
  }

}
