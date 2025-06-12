import { DataTable } from '@/shared/abstracts/data-table.abstract';
import { Component, OnInit } from '@angular/core';
import { PracticeDefinition, PracticeDefinitionFilter } from '../../practice-definition.models';
import { PracticeDefinitionFormComponent } from '../practice-definition-form/practice-definition-form.component';
import { ColumnConfig } from '@/shared/components/organisms/data-table/data-table.models';
import { PracticeDefinitionService } from '../../services/practice-definition.service';
import { ModalService } from '@/core/services/modal.service';
import { Observable } from 'rxjs';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { DataTableComponent } from "../../../../shared/components/organisms/data-table/data-table.component";

@Component({
  selector: 'app-practice-definition-table',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './practice-definition-table.component.html',
  styleUrl: './practice-definition-table.component.scss'
})
export class PracticeDefinitionTableComponent extends DataTable<PracticeDefinition, PracticeDefinitionFilter> implements OnInit {
  override entityName = 'Práctica';
  override entityKeyName = 'practiceDefinition';
  override formComponent = PracticeDefinitionFormComponent;
  override allowedActions = [];

  readonly columns: ColumnConfig<PracticeDefinition>[] = [
    { label: 'Nombre', field: 'name', sortable: true },
    { label: 'Descripción', field: 'description', sortable: false },
    { label: 'Semestre', field: 'semester', sortable: true },
    { label: 'Programa Académico', field: 'academicProgram', sortable: true, cell: (row) => row.academicProgram.name },
    { label: 'Plantilla de Práctica', field: 'practiceTemplate', sortable: true, cell: (row) => row.practiceTemplate.name },
  ];

  constructor(
    private readonly practiceDefinitionService: PracticeDefinitionService,
    modalService: ModalService
  ) {
    super(modalService);
  }

  ngOnInit(): void {
    this.loadPageData(this.filter);
  }

  override getAll(filter: PracticeDefinitionFilter): Observable<PaginatedResult<PracticeDefinition>> {
    return this.practiceDefinitionService.getPracticeDefinitionsByCriteria(filter);
  }

  override delete(id: string): Observable<void> {
    return this.practiceDefinitionService.deletePracticeDefinition(id);
  }

  get actions() {
    return this.getTableActions();
  }

}
