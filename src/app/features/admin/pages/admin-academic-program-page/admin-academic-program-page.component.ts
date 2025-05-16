import { Component} from '@angular/core';
import { AcademicProgramTableComponent } from "../../../academic-program/components/academic-program-table/academic-program-table.component";
import { AcademicProgramFormComponent } from '@/features/academic-program/components/academic-program-form/academic-program-form.component';
import { TableAction } from '@/shared/models/table-actions.enum';
import { AdminEntityPageConfig } from '../../admin.models';
import { AcademicProgram, AcademicProgramFilter } from '@/features/academic-program/academic-program.models';
import { AdminEntityPageComponent } from "../../components/admin-entity-page/admin-entity-page.component";

@Component({
  selector: 'app-admin-academic-program-page',
  standalone: true,
  imports: [AdminEntityPageComponent],
  templateUrl: './admin-academic-program-page.component.html',
  styleUrl: './admin-academic-program-page.component.scss'
})
export class AdminAcademicProgramPageComponent {
  programPageConfig: AdminEntityPageConfig<AcademicProgram, AcademicProgramFilter> = {
    title: 'Programas Académicos',
    description: 'Gestiona los programas académicos de la institución',
    createButtonLabel: 'Crear programa académico',
    tableComponent: AcademicProgramTableComponent,
    formComponent: AcademicProgramFormComponent,
    allowedActions: [TableAction.EDIT, TableAction.DELETE],
    modalData: () => ({ academicProgram: null })
  };
}
