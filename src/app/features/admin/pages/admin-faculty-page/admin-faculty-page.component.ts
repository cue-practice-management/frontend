import { Component} from '@angular/core';
import { FacultyTableComponent } from '@/features/faculty/components/faculty-table/faculty-table.component';
import { TableAction } from '@/shared/models/table-actions.enum';
import { FacultyFormComponent } from '@/features/faculty/components/faculty-form/faculty-form.component';
import { AdminEntityPageConfig } from '../../admin.models';
import { Faculty, FacultyFilter } from '@/features/faculty/faculty.models';
import { AdminEntityPageComponent } from "../../components/admin-entity-page/admin-entity-page.component";

@Component({
  selector: 'app-admin-faculty-page',
  standalone: true,
  imports: [AdminEntityPageComponent],
  templateUrl: './admin-faculty-page.component.html',
  styleUrl: './admin-faculty-page.component.scss'
})
export class AdminFacultyPageComponent {

  facultyPageConfig: AdminEntityPageConfig<Faculty, FacultyFilter> = {
    title: 'Programas Académicos',
    description: 'Gestiona los programas académicos de la institución',
    createButtonLabel: 'Crear programa académico',
    tableComponent: FacultyTableComponent,
    formComponent: FacultyFormComponent,
    allowedActions: [TableAction.EDIT, TableAction.DELETE],
    modalData: () => ({ faculty: null })
  };

}
