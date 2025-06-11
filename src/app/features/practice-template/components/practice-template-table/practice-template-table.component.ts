import { DataTable } from '@/shared/abstracts/data-table.abstract';
import { Component, Input, OnInit } from '@angular/core';
import { DataTableComponent } from "@organisms/data-table/data-table.component";
import { PracticeTemplate, PracticeTemplateFilter } from '../../practice-template.models';
import { PracticeTemplateFormComponent } from '../practice-template-form/practice-template-form.component';
import { ColumnConfig, TableRowAction } from '@/shared/components/organisms/data-table/data-table.models';
import { ModalService } from '@/core/services/modal.service';
import { PracticeTemplateService } from '../../services/practice-template.service';
import { Observable } from 'rxjs';
import { PaginatedResult } from '@/core/models/paginated-result.model';

@Component({
  selector: 'app-practice-template-table',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './practice-template-table.component.html',
  styleUrl: './practice-template-table.component.scss'
})
export class PracticeTemplateTableComponent extends DataTable<PracticeTemplate, PracticeTemplateFilter> implements OnInit {
  @Input() override allowedActions = [];
  override entityKeyName: string = 'template';
  override entityName: string = 'Plantilla de Práctica';
  override formComponent = PracticeTemplateFormComponent;


  readonly columns: ColumnConfig<PracticeTemplate>[] = [
    {
      label: 'Nombre',
      field: 'name',
      cell: c => c.name,
      sortable: true
    },
    {
      label: 'Descripción',
      field: 'description',
      cell: c => c.description || 'Sin descripción',
      sortable: false
    },
    {
      label: 'Fecha de Creación',
      field: 'createdAt',
      cell: c => c.createdAt ? new Date(c.createdAt).toLocaleDateString() : '',
      sortable: true
    }
  ];

  constructor(
    private readonly practiceTemplateService: PracticeTemplateService,
    modalService: ModalService
  ) {
    super(modalService);
  }

  ngOnInit(): void {
    this.loadPageData(this.filter);
  }

  override getAll(filter: PracticeTemplateFilter): Observable<PaginatedResult<PracticeTemplate>> {
    return this.practiceTemplateService.getPracticeTemplates(filter);
  }

  override delete(templateId: string): Observable<void> {
    return this.practiceTemplateService.deletePracticeTemplate(templateId);
  }

  get actions(): TableRowAction<PracticeTemplate>[] {
    return this.getTableActions();
  }

}
