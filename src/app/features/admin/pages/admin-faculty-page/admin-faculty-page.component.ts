import { Component} from '@angular/core';
import { AdminSectionWrapperComponent } from '../../components/admin-section-wrapper/admin-section-wrapper.component';
import { Faculty } from '@/features/faculty/faculty.models';
import { FacultyTableComponent } from '@/features/faculty/components/faculty-table/faculty-table.component';
import { TableAction } from '@/shared/models/table-actions.enum';

@Component({
  selector: 'app-admin-faculty-page',
  standalone: true,
  imports: [AdminSectionWrapperComponent, FacultyTableComponent],
  templateUrl: './admin-faculty-page.component.html',
  styleUrl: './admin-faculty-page.component.scss'
})
export class AdminFacultyPageComponent {
  readonly TableAction = TableAction;


  onEditFaculty(faculty: Faculty): void {
    console.log('Editar facultad:', faculty);
  }

  onDeleteFaculty(faculty: Faculty): void {
    console.log('Eliminar facultad:', faculty);
  }
}
