import { RetrievePaginatedData } from './retrieve-paginated-data';
import { PaginationQuery } from '@/core/models/pagination-query.model';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { ModalService } from '@/core/services/modal.service';
import { ConfirmDialogComponent } from '@/shared/components/molecules/confirm-dialog/confirm-dialog.component';
import { Observable } from 'rxjs';
import { Type } from '@angular/core';
import { TableAction } from '../models/table-actions.enum';
import { TableRowAction } from '../components/organisms/data-table/data-table.models';
import { Edit, Trash } from 'lucide-angular';
import { DEFAULT_QUERY_PAGINATION } from '@/core/constants/pagination.constants';

export abstract class DataTable<T extends { _id: string }, U extends PaginationQuery = PaginationQuery> extends RetrievePaginatedData<T, U> {
    abstract entityKeyName: string;
    abstract entityName: string;
    abstract formComponent: Type<any>;
    allowedActions: TableAction[] = [];

    constructor(protected modalService: ModalService) {
        super();
    }

    abstract getAll(filter: U): Observable<PaginatedResult<T>>;
    abstract delete(id: string): Observable<void>;

    override fetchPage(filter: U): Observable<PaginatedResult<T>> {
        return this.getAll(filter);
    }

    override getInitialFilter(): U {
        return { ...DEFAULT_QUERY_PAGINATION } as U;
    }

    onPaginationChange(query: PaginationQuery): void {
        this.loadPageData({ ...this.filter, ...query });
    }

    protected editEntity(entity: T): void {
        this.modalService
            .open(this.formComponent, { data: { [this.entityKeyName]: entity } })
            .afterClosed()
            .subscribe((result) => result && this.loadPageData(this.filter));
    }

    protected deleteEntity(entity: T & { name?: string }): void {
        this.modalService
            .open(ConfirmDialogComponent, {
                data: {
                    confirmDialogData: {
                        title: `¿Eliminar ${this.entityName}?`,
                        message: `¿Estás seguro de eliminar "${entity.name ?? 'este registro'}"?`,
                        confirmText: 'Eliminar',
                        cancelText: 'Cancelar',
                        danger: true
                    }
                }
            })
            .afterClosed()
            .subscribe((confirmed) => {
                if (confirmed) {
                    this.delete(entity._id).subscribe(() => this.loadPageData(this.filter));
                }
            });
    }

    protected getTableActions(): TableRowAction<T>[] {
        const actions: TableRowAction<T>[] = [];

        if (this.allowedActions?.includes(TableAction.EDIT)) {
            actions.push({
                label: 'Editar',
                icon: Edit,
                action: (entity) => this.editEntity(entity)
            });
        }

        if (this.allowedActions?.includes(TableAction.DELETE)) {
            actions.push({
                label: 'Eliminar',
                icon: Trash,
                danger: true,
                action: (entity) => this.deleteEntity(entity)
            });
        }

        return actions;
    }
}
