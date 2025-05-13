import { PaginatedResult } from '@/core/models/paginated-result.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Faculty } from '../../faculty.models';
import { ColumnConfig, TableRowAction } from '@/shared/components/organisms/data-table/data-table.models';
import { Edit, Trash } from 'lucide-angular';
import { DataTableComponent } from '@/shared/components/organisms/data-table/data-table.component';

@Component({
  selector: 'app-faculty-table',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './faculty-table.component.html',
  styleUrl: './faculty-table.component.scss'
})
export class FacultyTableComponent {
  @Input() pageData!: PaginatedResult<Faculty>;
  @Input() loading = false;
  @Output() pageChange = new EventEmitter<number>();
  @Output() edit = new EventEmitter<Faculty>();
  @Output() delete = new EventEmitter<Faculty>();

  readonly columns: ColumnConfig<Faculty>[] = [
    { label: 'Nombre', field: 'name' },
    { label: 'Descripción', field: 'description' },
    { label: 'Decano', cell: (f) => `${f.deanName} (${f.deanEmail})` }
  ];

  readonly actions: TableRowAction<Faculty>[] = [
    {
      label: 'Editar',
      icon: Edit,
      action: (faculty) => this.edit.emit(faculty)
    },
    {
      label: 'Eliminar',
      icon: Trash,
      danger: true,
      action: (faculty) => this.delete.emit(faculty)
    }
  ];
}
