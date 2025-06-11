import { Component, Input, OnInit, Type } from '@angular/core';
import { PracticeTemplateDeliverable, PracticeTemplateDeliverableFilter } from '../../practice-template.models';
import { DataTable } from '@/shared/abstracts/data-table.abstract';
import { PracticeTemplateDeliverableFormComponent } from '../practice-template-deliverable-form/practice-template-deliverable-form.component';
import { ModalService } from '@/core/services/modal.service';
import { PracticeTemplateDeliverablesService } from '../../services/practice-template-deliverables.service';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { Observable } from 'rxjs';
import { ColumnConfig, TableRowAction } from '@/shared/components/organisms/data-table/data-table.models';
import { DataTableComponent } from "@organisms/data-table/data-table.component";
import { TableAction } from '@/shared/models/table-actions.enum';

@Component({
  selector: 'app-practice-template-deliverable-table',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './practice-template-deliverable-table.component.html',
  styleUrl: './practice-template-deliverable-table.component.scss'
})
export class PracticeTemplateDeliverableTableComponent extends DataTable<PracticeTemplateDeliverable, PracticeTemplateDeliverableFilter> implements OnInit {
  @Input() override allowedActions!: TableAction[];
  @Input() templateId!: string;
  override entityKeyName: string = 'deliverable';
  override entityName: string = 'Entregable de Práctica';
  override formComponent = PracticeTemplateDeliverableFormComponent;

  readonly columns: ColumnConfig<PracticeTemplateDeliverable>[] = [
    {
      label: 'Nombre',
      field: 'title',
      cell: (c: PracticeTemplateDeliverable) => c.title,
      sortable: true
    },
    {
      label: 'Descripción',
      field: 'description',
      cell: (c: PracticeTemplateDeliverable) => c.description || 'Sin descripción',
      sortable: false
    },
    {
      label: 'Días estimados para entrega',
      field: 'estimatedDueOffsetDays',
      cell: (c: PracticeTemplateDeliverable) => c.estimatedDueOffsetDays ? `${c.estimatedDueOffsetDays} días` : 'No definido',
      sortable: false
    },
    {
      label: 'Fecha de Creación',
      field: 'createdAt',
      cell: (c: PracticeTemplateDeliverable) => c.createdAt ? new Date(c.createdAt).toLocaleDateString() : '',
      sortable: true
    }
  ];

  constructor(
    private readonly practiceTemplateDeliverableService: PracticeTemplateDeliverablesService,
    modalService: ModalService
  ) {
    super(modalService);
  }

  ngOnInit(): void {
    this.loadPageData(this.filter);
  }

  onCreate(): void {
    this.modalService
      .open(this.formComponent, { data: { templateId: this.templateId } })
      .afterClosed()
      .subscribe((result) => result && this.loadPageData(this.filter));
  }

  override getAll(filter: PracticeTemplateDeliverableFilter): Observable<PaginatedResult<PracticeTemplateDeliverable>> {
    return this.practiceTemplateDeliverableService.getPracticeTemplateDeliverables(this.templateId, filter);
  }

  override delete(deliverableId: string): Observable<void> {
    return this.practiceTemplateDeliverableService.deletePracticeTemplateDeliverable(this.templateId, deliverableId);
  }

  protected override editEntity(entity: PracticeTemplateDeliverable): void {
    this.modalService
      .open(this.formComponent, { data: { [this.entityKeyName]: entity, templateId: this.templateId } })
      .afterClosed()
      .subscribe((result) => result && this.loadPageData(this.filter));
  }

  get actions(): TableRowAction<PracticeTemplateDeliverable>[] {
    return this.getTableActions();
  }
}
