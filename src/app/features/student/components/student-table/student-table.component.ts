import { DataTable } from '@/shared/abstracts/data-table.abstract';
import { Component, Input, OnInit } from '@angular/core';
import { Student, StudentFilter } from '../../student.model';
import { TableAction } from '@/shared/models/table-actions.enum';
import { ColumnConfig, TableRowAction } from '@/shared/components/organisms/data-table/data-table.models';
import { StudentService } from '../../services/student.service';
import { ModalService } from '@/core/services/modal.service';
import { Observable } from 'rxjs';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { DataTableComponent } from "@organisms/data-table/data-table.component";
import { StudentFormComponent } from '../student-form/student-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-table',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.scss'
})
export class StudentTableComponent extends DataTable<Student, StudentFilter> implements OnInit {
  override entityName = 'Estudiante';
  override entityKeyName = 'student';
  override formComponent = StudentFormComponent;
  @Input() override allowedActions: TableAction[] = [TableAction.EDIT, TableAction.DELETE];

  readonly columns: ColumnConfig<Student>[] = [
    { label: 'Nombre', field: 'firstName', sortable: true },
    { label: 'Apellidos', field: 'lastName', sortable: true },
    { label: 'Correo', field: 'email', sortable: false },
    { label: 'Teléfono', field: 'phoneNumber', sortable: false },
    { label: 'Número de documento', field: 'documentNumber', sortable: false },
    { label: 'Programa académico', field: 'academicProgram', cell: (row) => row.academicProgram.name, sortable: true },
    { label: 'Semestre actual', field: 'currentSemester', sortable: false },
    { label: 'Empresa actual', field: 'currentCompany', sortable: false },
  ];

  constructor(private studentService: StudentService, private router: Router, modalService: ModalService) {
    super(modalService);
  }

  ngOnInit(): void {
    this.loadPageData(this.filter);
  }

  override getAll(filter: StudentFilter): Observable<PaginatedResult<Student>> {
    return this.studentService.getStudents(filter);
  }

  override delete(id: string): Observable<void> {
    return this.studentService.deleteStudent(id);
  }

  get actions(): TableRowAction<Student>[] {
    return this.getTableActions();
  }

  onRowClick(student: Student): void {
    this.router.navigate(['/admin/students', student._id]);
  }

}
