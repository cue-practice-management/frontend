import { Component } from '@angular/core';
import { AdminEntityPageComponent } from "../../components/admin-entity-page/admin-entity-page.component";
import { AdminEntityPageConfig } from '../../admin.models';
import { StudentTableComponent } from '@/features/student/components/student-table/student-table.component';
import { StudentFormComponent } from '@/features/student/components/student-form/student-form.component';
import { Student, StudentFilter } from '@/features/student/student.model';
import { StudentFilterComponent } from '@/features/student/components/student-filter/student-filter.component';
import { TableAction } from '@/shared/models/table-actions.enum';
import { HeroSectionBentoComponent } from '@/features/homes/components/hero-section/hero-section-bento/hero-section-bento.component';

@Component({
  selector: 'app-admin-student-page',
  standalone: true,
  imports: [AdminEntityPageComponent],
  templateUrl: './admin-student-page.component.html',
  styleUrl: './admin-student-page.component.scss'
})
export class AdminStudentPageComponent {

  studentPageConfig: AdminEntityPageConfig<Student, StudentFilter> = {
    title: 'Estudiantes',
    description: 'Gestiona los estudiantes de la institución',
    createButtonLabel: 'Crear estudiante',
    tableComponent: StudentTableComponent,
    formComponent: StudentFormComponent,
    filterComponent: StudentFilterComponent,
    allowedActions: [TableAction.EDIT, TableAction.DELETE],
    modalWidth: '800px',
  }

}
