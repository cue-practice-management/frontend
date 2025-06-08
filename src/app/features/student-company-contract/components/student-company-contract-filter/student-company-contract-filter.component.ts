import { Component, EventEmitter, Output } from '@angular/core';
import { AdminEntityFilterComponent } from "../../../admin/components/admin-entity-filter/admin-entity-filter.component";
import { STUDENT_COMPANY_CONTRACT_STATUS_FILTER_FIELDS } from './student-company-contract-filter.constants';
import { StudentCompanyContractFilter } from '../../student-company-contract.models';

@Component({
  selector: 'app-student-company-contract-filter',
  standalone: true,
  imports: [AdminEntityFilterComponent],
  templateUrl: './student-company-contract-filter.component.html',
  styleUrl: './student-company-contract-filter.component.scss'
})
export class StudentCompanyContractFilterComponent {
  @Output() filterChange = new EventEmitter<StudentCompanyContractFilter>();
  fields = STUDENT_COMPANY_CONTRACT_STATUS_FILTER_FIELDS;

  onApply(filter: StudentCompanyContractFilter): void {
    this.filterChange.emit(filter);
  }
}
