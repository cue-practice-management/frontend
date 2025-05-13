import { PaginatedResult } from '@/core/models/paginated-result.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColumnConfig, TableRowAction } from './data-table.models';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent<T> {
  @Input() pageData!: PaginatedResult<T>;
  @Input() columns: ColumnConfig<T>[] = [];
  @Input() actions: TableRowAction<T>[] = [];
  @Input() loading = false;
  @Output() pageChange = new EventEmitter<number>();

  goToPage(page: number) {
    if (page !== this.pageData.page && page >= 1 && page <= this.pageData.totalPages) {
      this.pageChange.emit(page);
    }
  }
}