import { PaginatedResult } from '@/core/models/paginated-result.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColumnConfig, TableRowAction } from './data-table.models';
import { CommonModule } from '@angular/common';
import { ChevronDown, ChevronUp, LucideAngularModule } from 'lucide-angular';
import { SpinnerComponent } from "../../atoms/spinner/spinner.component";
import { PaginationQuery } from '@/core/models/pagination-query.model';
import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, SpinnerComponent, ButtonComponent],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent<T> {
  @Input() pageData?: PaginatedResult<T>;
  @Input() columns: ColumnConfig<T>[] = [];
  @Input() actions: TableRowAction<T>[] = [];
  @Input() loading = false;
  @Input() pagination: PaginationQuery = { page: 1, limit: 10 };

  @Output() paginationChange = new EventEmitter<PaginationQuery>();

  goToPage(page: number): void {
    if (!this.pageData) return;

    if (page !== this.pageData.page && page >= 1 && page <= this.pageData.totalPages) {
      this.pagination = { ...this.pagination, page };
      this.paginationChange.emit(this.pagination);
    }
  }


  onSort(field: string): void {
    const isSameField = this.pagination.sortBy === field;
    const currentOrder = this.pagination.sortOrder ?? 'desc';

    const nextOrder: 'asc' | 'desc' = isSameField
      ? currentOrder === 'asc' ? 'desc' : 'asc'
      : 'asc';

    this.pagination = {
      ...this.pagination,
      sortBy: field,
      sortOrder: nextOrder,
      page: 1
    };

    this.paginationChange.emit(this.pagination);
  }


  readonly ChevronUp = ChevronUp;
  readonly ChevronDown = ChevronDown;
}