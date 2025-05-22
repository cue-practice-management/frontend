import { TypeaheadConfig, TypeaheadItem } from '@/shared/models/typeahead-item.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputTypeaheadComponent } from "@atoms/input-typeahead/input-typeahead.component";
import { FormControl } from '@angular/forms';
import { AcademicProgramService } from '../../services/academic-program.service';

@Component({
  selector: 'app-academic-program-typeahead',
  standalone: true,
  imports: [InputTypeaheadComponent],
  templateUrl: './academic-program-typeahead.component.html',
  styleUrl: './academic-program-typeahead.component.scss'
})
export class AcademicProgramTypeaheadComponent {
  @Input() control!: FormControl;
  @Output() selectedProgramItem: EventEmitter<TypeaheadItem> = new EventEmitter<TypeaheadItem>();

  constructor(
    private academicProgramService: AcademicProgramService
  ) { }

  config: TypeaheadConfig = {
    placeholder: 'Programa académico',
    retrieveOptions: (term: string) => this.academicProgramService.getTypeaheadAcademicPrograms(term),
  }

  onSelectedOption(option: TypeaheadItem): void {
    this.selectedProgramItem.emit(option);
  }

}
