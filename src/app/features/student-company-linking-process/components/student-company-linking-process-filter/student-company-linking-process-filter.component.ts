import { Component, EventEmitter, Output } from '@angular/core';
import { StudentCompanyLinkingProcessFilter } from '../../student-company-linking-process.models';
import { AdminEntityFilterComponent } from "../../../admin/components/admin-entity-filter/admin-entity-filter.component";
import { STUDENT_COMPANY_LINKING_PROCESS_FILTER_FIELDS } from './student-company-linking-process-filter.constants';

@Component({
  selector: 'app-student-company-linking-process-filter',
  standalone: true,
  imports: [AdminEntityFilterComponent],
  templateUrl: './student-company-linking-process-filter.component.html',
  styleUrl: './student-company-linking-process-filter.component.scss'
})
export class StudentCompanyLinkingProcessFilterComponent {
  @Output() filterChange = new EventEmitter<StudentCompanyLinkingProcessFilter>();
  fields = STUDENT_COMPANY_LINKING_PROCESS_FILTER_FIELDS;

  onApply(filter: StudentCompanyLinkingProcessFilter): void {
    this.filterChange.emit(filter);
  }
}
