import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputTypeaheadComponent } from "../../../../shared/components/atoms/input-typeahead/input-typeahead.component";
import { PracticeDefinitionService } from '../../services/practice-definition.service';
import { TypeaheadConfig, TypeaheadItem } from '@/shared/models/typeahead-item.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-practice-definition-typeahead',
  standalone: true,
  imports: [InputTypeaheadComponent],
  templateUrl: './practice-definition-typeahead.component.html',
  styleUrl: './practice-definition-typeahead.component.scss'
})
export class PracticeDefinitionTypeaheadComponent {
  @Input() control!: FormControl;
  @Output() selectedStudentItem: EventEmitter<TypeaheadItem> = new EventEmitter<TypeaheadItem>();

  constructor(
    private practiceDefinitionService: PracticeDefinitionService
  ) { }

  config: TypeaheadConfig = {
    placeholder: 'Práctica',
    retrieveOptions: (term: string) => this.practiceDefinitionService.getPracticeDefinitionTypeahead(term),
  }

  onSelectedOption(option: TypeaheadItem): void {
    this.selectedStudentItem.emit(option);
  }
}
