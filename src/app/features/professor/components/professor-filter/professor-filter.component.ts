import { Component, EventEmitter, Output } from '@angular/core';
import { ProfessorFilter } from '../../professor.models';
import { AdminEntityFilterComponent } from "@admin/components/admin-entity-filter/admin-entity-filter.component";
import { PROFESSOR_FILTER_FIELDS } from './professor-filter.constants';

@Component({
  selector: 'app-professor-filter',
  standalone: true,
  imports: [AdminEntityFilterComponent],
  templateUrl: './professor-filter.component.html',
  styleUrl: './professor-filter.component.scss'
})
export class ProfessorFilterComponent {
  @Output() filterChange = new EventEmitter<ProfessorFilter>();
  fields = PROFESSOR_FILTER_FIELDS;

  onApply(filter: ProfessorFilter): void {
    this.filterChange.emit(filter);
  }

}
