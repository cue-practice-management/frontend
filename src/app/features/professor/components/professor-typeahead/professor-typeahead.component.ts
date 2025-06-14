import { TypeaheadConfig, TypeaheadItem } from '@/shared/models/typeahead-item.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProfessorService } from '../../services/professor.service';
import { FormControl } from '@angular/forms';
import { InputTypeaheadComponent } from "@atoms/input-typeahead/input-typeahead.component";

@Component({
  selector: 'app-professor-typeahead',
  standalone: true,
  imports: [InputTypeaheadComponent],
  templateUrl: './professor-typeahead.component.html',
  styleUrl: './professor-typeahead.component.scss'
})
export class ProfessorTypeaheadComponent {
  @Input() control!: FormControl;
  @Output() selectedStudentItem: EventEmitter<TypeaheadItem> = new EventEmitter<TypeaheadItem>();

  constructor(
    private professorService: ProfessorService
  ) { }

  config: TypeaheadConfig = {
    placeholder: 'Profesor',
    retrieveOptions: (term: string) => this.professorService.getProfessorsTypeahead(term),
  }

  onSelectedOption(option: TypeaheadItem): void {
    this.selectedStudentItem.emit(option);
  }

}
