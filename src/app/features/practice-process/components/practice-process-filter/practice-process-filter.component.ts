import { Component, EventEmitter, Output } from '@angular/core';
import { AdminEntityFilterComponent } from "../../../admin/components/admin-entity-filter/admin-entity-filter.component";
import { PracticeProcessFilter } from '../../practice-process.models';
import { PRACTICE_PROCESS_FILTER_FIELDS } from './practice-process-filter.constants';

@Component({
  selector: 'app-practice-process-filter',
  standalone: true,
  imports: [AdminEntityFilterComponent],
  templateUrl: './practice-process-filter.component.html',
  styleUrl: './practice-process-filter.component.scss'
})
export class PracticeProcessFilterComponent {
  @Output() filterChange = new EventEmitter<PracticeProcessFilter>();
  fields = PRACTICE_PROCESS_FILTER_FIELDS;

  onApply(filter: PracticeProcessFilter): void {
    this.filterChange.emit(filter);
  }
}
