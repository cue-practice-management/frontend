import { Component, EventEmitter, inject, Output } from '@angular/core';
import { StudentFilter } from '../../student.model';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from '@/shared/components/atoms/input-text/input-text.component';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import { Gender } from '@/core/enums/gender.enum';
import { ButtonComponent } from '@/shared/components/atoms/button/button.component';
import { InputSelectComponent } from "@atoms/input-select/input-select.component";
import { SelectOption } from '@/shared/components/atoms/input-select/input-select.models';
import { AcademicProgramTypeaheadComponent } from '@/features/academic-program/components/academic-program-typeahead/academic-program-typeahead.component';
import { GENDER_SELECT_OPTIONS } from '@/core/constants/select-options.constants';

@Component({
  selector: 'app-student-filter',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextComponent,
    ButtonComponent,
    InputSelectComponent,
    AcademicProgramTypeaheadComponent
  ],
  templateUrl: './student-filter.component.html',
  styleUrl: './student-filter.component.scss'
})
export class StudentFilterComponent {
  @Output() filterChange = new EventEmitter<StudentFilter>();
  form: FormGroup;
  modalRef = inject(ModalRef, { optional: true });

  genderOptions: SelectOption[] = GENDER_SELECT_OPTIONS;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fullName: [''],
      email: [''],
      documentNumber: [''],
      gender: [''],
      academicProgram: [''],
      currentSemester: [null],
    });
  }

  onApply(): void {
    this.filterChange.emit(this.form.value);
    this.modalRef?.close();
  }

  onClear(): void {
    this.form.reset();
    this.form.get('gender')?.setValue(''); 
    this.filterChange.emit(this.form.value);
    this.modalRef?.close();
  }

  get fullName(): FormControl {
    return this.form.get('fullName') as FormControl;
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get documentNumber(): FormControl {
    return this.form.get('documentNumber') as FormControl;
  }

  get gender(): FormControl {
    return this.form.get('gender') as FormControl;
  }

  get academicProgram(): FormControl {
    return this.form.get('academicProgram') as FormControl;
  }

  get currentSemester(): FormControl {
    return this.form.get('currentSemester') as FormControl;
  }

}

