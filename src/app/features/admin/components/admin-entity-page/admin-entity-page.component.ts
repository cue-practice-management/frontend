import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ComponentRef, EnvironmentInjector, Input, OnDestroy, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { AdminSectionWrapperComponent } from '../admin-section-wrapper/admin-section-wrapper.component';
import { ButtonComponent } from '@/shared/components/atoms/button/button.component';
import { AdminEntityPageConfig } from '../../admin.models';
import { ModalService } from '@/core/services/modal.service';
import { TableAction } from '@/shared/models/table-actions.enum';
import { PaginationQuery } from '@/core/models/pagination-query.model';
import { DataTable } from '@/shared/abstracts/data-table.abstract';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-entity-page',
  standalone: true,
  imports: [CommonModule, AdminSectionWrapperComponent, ButtonComponent],
  templateUrl: './admin-entity-page.component.html',
})
export class AdminEntityPageComponent<T extends { _id: string }, U extends PaginationQuery = PaginationQuery> implements AfterViewInit, OnDestroy {
  @Input() config!: AdminEntityPageConfig<T, U>;

  @ViewChild('tableContainer', { read: ViewContainerRef, static: true })
  tableContainer!: ViewContainerRef;

  @ViewChild('filterContainer', { read: ViewContainerRef, static: true }) 
  filterContainer!: ViewContainerRef;

  tableInstance!: ComponentRef<DataTable<T, U>>;
  private filterSub?: Subscription;

  constructor(
    private modalService: ModalService,
    private cdr: ChangeDetectorRef,
    private envInjector: EnvironmentInjector
  ) { }

  ngAfterViewInit(): void {
    this.initTableComponent();
    this.initFilterComponent();
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this.filterSub?.unsubscribe();
  }

  openCreateEntityModal(): void {
    const { formComponent, modalData = {} } = this.config;
    const data = typeof modalData === 'function' ? modalData() : modalData;

    this.modalService.open(formComponent, { width: this.config.modalWidth, data }).afterClosed()
      .subscribe(result => {
        if (result) {
          this.tableInstance.instance.reloadPageData();
        }
      });
  }

  private initTableComponent(): void {
    const { tableComponent, allowedActions = [TableAction.EDIT, TableAction.DELETE] } = this.config;
    this.tableContainer.clear();
    this.tableInstance = this.tableContainer.createComponent(tableComponent, {
      environmentInjector: this.envInjector
    });
    this.tableInstance.instance.allowedActions = allowedActions;
    this.cdr.detectChanges();
  }

  private initFilterComponent(): void {
    const { filterComponent } = this.config;
    if (!filterComponent) return;
    
    this.filterContainer.clear();
    const filterRef = this.filterContainer.createComponent(filterComponent, {
      environmentInjector: this.envInjector
    });
    
    this.filterSub?.unsubscribe();
    this.filterSub = filterRef.instance.filterChange.subscribe((filter: U) => {
      if (this.tableInstance?.instance?.loadPageData) {
        this.tableInstance.instance.loadPageData(filter);
      }
    });
  }
}