import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ComponentRef, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { AdminSectionWrapperComponent } from '../admin-section-wrapper/admin-section-wrapper.component';
import { ButtonComponent } from '@/shared/components/atoms/button/button.component';
import { AdminEntityPageConfig } from '../../admin.models';
import { ModalService } from '@/core/services/modal.service';
import { TableAction } from '@/shared/models/table-actions.enum';
import { PaginationQuery } from '@/core/models/pagination-query.model';
import { DataTable } from '@/shared/abstracts/data-table.abstract';

@Component({
  selector: 'app-admin-entity-page',
  standalone: true,
  imports: [CommonModule, AdminSectionWrapperComponent, ButtonComponent],
  templateUrl: './admin-entity-page.component.html',
})
export class AdminEntityPageComponent<
  T extends { _id: string },
  U extends PaginationQuery = PaginationQuery
> implements AfterViewInit {
  @Input() config!: AdminEntityPageConfig<T, U>;

  @ViewChild('tableContainer', { read: ViewContainerRef, static: true })
  tableContainer!: ViewContainerRef;

  tableInstance!: ComponentRef<DataTable<T, U>>;

  constructor(private modalService: ModalService,   private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    const { tableComponent, allowedActions = [TableAction.EDIT, TableAction.DELETE] } = this.config;

    this.tableContainer.clear();
    this.tableInstance = this.tableContainer.createComponent(tableComponent);
    this.tableInstance.instance.allowedActions = allowedActions;

    this.cdr.detectChanges();
  }

  openCreateEntityModal(): void {
    const { formComponent, modalData = {} } = this.config;
    const data = typeof modalData === 'function' ? modalData() : modalData;

    this.modalService.open(formComponent, { data }).afterClosed()
      .subscribe(result => {
        if (result) {
          this.tableInstance.instance.reloadPageData();
        }
      });
  }
}

