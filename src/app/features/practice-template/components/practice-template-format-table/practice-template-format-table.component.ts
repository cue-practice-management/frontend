import { Component, Input, OnInit } from '@angular/core';
import { PracticeTemplateFormat, PracticeTemplateFormatFilter } from '../../practice-template.models';
import { TableAction } from '@/shared/models/table-actions.enum';
import { DataTable } from '@/shared/abstracts/data-table.abstract';
import { PracticeTemplateFormatFormComponent } from '../practice-template-format-form/practice-template-format-form.component';
import { ColumnConfig, TableRowAction } from '@/shared/components/organisms/data-table/data-table.models';
import { PracticeTemplateFormatService } from '../../services/practice-template-format.service';
import { ModalService } from '@/core/services/modal.service';
import { Observable } from 'rxjs';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { DataTableComponent } from "@organisms/data-table/data-table.component";

@Component({
  selector: 'app-practice-template-format-table',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './practice-template-format-table.component.html',
  styleUrl: './practice-template-format-table.component.scss'
})
export class PracticeTemplateFormatTableComponent extends DataTable<PracticeTemplateFormat, PracticeTemplateFormatFilter> implements OnInit {
  @Input() override allowedActions!: TableAction[];
  @Input() templateId!: string;
  override entityKeyName: string = 'format';
  override entityName: string = 'Formato de Práctica';
  override formComponent = PracticeTemplateFormatFormComponent;

  readonly columns: ColumnConfig<PracticeTemplateFormat>[] = [
    {
      label: 'Nombre',
      field: 'name',
      sortable: true
    },
    {
      label: 'Descripción',
      field: 'description',
      cell: (c: PracticeTemplateFormat) => c.description || 'Sin descripción',
      sortable: false
    },
    {
      label: 'Días estimados para entrega',
      field: 'fileUrl',
      isFile: true,
      sortable: false
    },
    {
      label: 'Fecha de Creación',
      field: 'createdAt',
      cell: (c: PracticeTemplateFormat) => c.createdAt ? new Date(c.createdAt).toLocaleDateString() : '',
      sortable: true
    }
  ];

  constructor(
    private readonly practiceTemplateFormatService: PracticeTemplateFormatService,
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

  override getAll(filter: PracticeTemplateFormatFilter): Observable<PaginatedResult<PracticeTemplateFormat>> {
    return this.practiceTemplateFormatService.getPracticeTemplateFormats(this.templateId, filter);
  }

  override delete(formatId: string): Observable<void> {
    return this.practiceTemplateFormatService.deletePracticeTemplateFormat(this.templateId, formatId);
  }

  protected override editEntity(entity: PracticeTemplateFormat): void {
    this.modalService
      .open(this.formComponent, { data: { [this.entityKeyName]: entity, templateId: this.templateId } })
      .afterClosed()
      .subscribe((result) => result && this.loadPageData(this.filter));
  }

  get actions(): TableRowAction<PracticeTemplateFormat>[] {
    return this.getTableActions();
  }
}
