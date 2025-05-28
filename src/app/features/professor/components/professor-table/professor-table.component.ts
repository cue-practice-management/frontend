import { Component, Input, OnInit } from '@angular/core';
import { Professor, ProfessorFilter } from '../../professor.models';
import { DataTable } from '@/shared/abstracts/data-table.abstract';
import { TableAction } from '@/shared/models/table-actions.enum';
import { ProfessorFormComponent } from '../professor-form/professor-form.component';
import { ColumnConfig, TableRowAction } from '@/shared/components/organisms/data-table/data-table.models';
import { ProfessorService } from '../../services/professor.service';
import { ModalService } from '@/core/services/modal.service';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { Observable } from 'rxjs';
import { DataTableComponent } from "../../../../shared/components/organisms/data-table/data-table.component";

@Component({
  selector: 'app-professor-table',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './professor-table.component.html',
  styleUrl: './professor-table.component.scss'
})
export class ProfessorTableComponent extends DataTable<Professor, ProfessorFilter> implements OnInit {
  override entityName = 'Profesor';
  override entityKeyName = 'professor';
  override formComponent = ProfessorFormComponent;
  @Input() override allowedActions: TableAction[] = [TableAction.EDIT, TableAction.DELETE];

  readonly columns: ColumnConfig<Professor>[] = [
    { label: 'Nombre', field: 'firstName', sortable: true },
    { label: 'Apellidos', field: 'lastName', sortable: true },
    { label: 'Correo', field: 'email', sortable: false },
    { label: 'Teléfono', field: 'phoneNumber', sortable: false },
    { label: 'Número de documento', field: 'documentNumber', sortable: false },
    { label: 'Programa académico', field: 'academicProgram', cell: (row) => row.academicProgram.name, sortable: true },
  ];

  constructor(private professorService: ProfessorService, modalService: ModalService) {
    super(modalService);
  }

  ngOnInit(): void {
    this.loadPageData(this.filter);
  }

  override getAll(filter: ProfessorFilter): Observable<PaginatedResult<Professor>> {
    return this.professorService.getProfessors(filter);
  }

  override delete(id: string): Observable<void> {
    return this.professorService.deleteProfessor(id);
  }

  get actions(): TableRowAction<Professor>[] {
    return this.getTableActions();
  }
}
