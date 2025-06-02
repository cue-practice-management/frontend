import { Component, EventEmitter, Output } from '@angular/core';
import { AdminEntityFilterComponent } from "../../../admin/components/admin-entity-filter/admin-entity-filter.component";
import { CompanyMentorFilter } from '../../company-mentor.models';
import { COMPANY_MENTOR_FILTER_FIELDS } from './company-mentor-filter.constants';

@Component({
  selector: 'app-company-mentor-filter',
  standalone: true,
  imports: [AdminEntityFilterComponent],
  templateUrl: './company-mentor-filter.component.html',
  styleUrl: './company-mentor-filter.component.scss'
})
export class CompanyMentorFilterComponent {
  @Output() filterChange = new EventEmitter<CompanyMentorFilter>();
  fields = COMPANY_MENTOR_FILTER_FIELDS   ;

  onApply(filter: CompanyMentorFilter): void {
    this.filterChange.emit(filter);
  }
}
