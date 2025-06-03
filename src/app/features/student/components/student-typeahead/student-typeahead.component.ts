import { TypeaheadConfig, TypeaheadItem } from '@/shared/models/typeahead-item.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { InputTypeaheadComponent } from "@atoms/input-typeahead/input-typeahead.component";

@Component({
  selector: 'app-student-typeahead',
  standalone: true,
  imports: [InputTypeaheadComponent],
  templateUrl: './student-typeahead.component.html',
  styleUrl: './student-typeahead.component.scss'
})
export class StudentTypeaheadComponent {
  @Input() control!: FormControl;
  @Output() selectedStudentItem: EventEmitter<TypeaheadItem> = new EventEmitter<TypeaheadItem>();

  constructor(
    private studentService: StudentService
  ) { }

  config: TypeaheadConfig = {
    placeholder: 'Estudiante',
    retrieveOptions: (term: string) => this.studentService.getStudentsTypeahead(term),
  }

  onSelectedOption(option: TypeaheadItem): void {
    this.selectedStudentItem.emit(option);
  }
}
