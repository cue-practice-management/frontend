import { PaginationQuery } from '@/core/models/pagination-query.model';
import { DataTable } from '@/shared/abstracts/data-table.abstract';
import { TableAction } from '@/shared/models/table-actions.enum';
import { Type } from '@angular/core';
import { LucideIconData } from 'lucide-angular';

export interface SidebarItem {
  label: string;
  route?: string;
  icon: LucideIconData;
  children?: SidebarItem[];
}

export interface AdminEntityPageTable {
  reloadPageData: () => void;
}

export interface AdminEntityPageConfig<T extends { _id: string }, U extends PaginationQuery> {
  title: string;
  description: string;
  createButtonLabel: string;
  tableComponent: Type<DataTable<T, U>>;
  formComponent: Type<any>;
  filterComponent?: Type<any>;
  allowedActions?: TableAction[];
  modalWidth?: string;
  modalData?: Record<string, any> | (() => Record<string, any>);
}
