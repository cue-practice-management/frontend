import { Component, EventEmitter, Output } from '@angular/core';
import { StudentFilter } from '../../student.model';
import { STUDENT_FILTER_FIELDS } from './student.filter.constants';
import { AdminEntityFilterComponent } from "../../../admin/components/admin-entity-filter/admin-entity-filter.component";

@Component({
  selector: 'app-student-filter',
  standalone: true,
  imports: [
    AdminEntityFilterComponent
  ],
  templateUrl: './student-filter.component.html',
  styleUrl: './student-filter.component.scss'
})
export class StudentFilterComponent {
  @Output() filterChange = new EventEmitter<StudentFilter>();
  fields = STUDENT_FILTER_FIELDS;

  onApply(filter: StudentFilter): void {
    this.filterChange.emit(filter);
  }
}
