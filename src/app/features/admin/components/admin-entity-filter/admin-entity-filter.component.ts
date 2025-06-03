import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicFilterField } from './admin-entity-filter.models';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import { InputTextComponent } from "@atoms/input-text/input-text.component";
import { InputSelectComponent } from "@atoms/input-select/input-select.component";
import { AcademicProgramTypeaheadComponent } from "../../../academic-program/components/academic-program-typeahead/academic-program-typeahead.component";
import { ButtonComponent } from "@atoms/button/button.component";
import { CommonModule } from '@angular/common';
import { CompanyTypeaheadComponent } from "../../../company/components/company-typeahead/company-typeahead.component";
import { StudentTypeaheadComponent } from "../../../student/components/student-typeahead/student-typeahead.component";

@Component({
  selector: 'app-admin-entity-filter',
  standalone: true,
  imports: [InputTextComponent, InputSelectComponent, AcademicProgramTypeaheadComponent, ButtonComponent, ReactiveFormsModule, CommonModule, CompanyTypeaheadComponent, StudentTypeaheadComponent],
  templateUrl: './admin-entity-filter.component.html',
  styleUrl: './admin-entity-filter.component.scss'
})
export class AdminEntityFilterComponent<T extends Record<string, any> = any> implements OnInit {
  @Input() fields: DynamicFilterField [] = [];

  @Output() filterChange = new EventEmitter<T>();

  form: FormGroup;
  modalRef = inject(ModalRef, { optional: true });

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.fields.forEach(field => {
      this.form.addControl(field.key, new FormControl(''));
    });
  }

  onApply(): void {
    this.filterChange.emit(this.form.value as T);
    this.modalRef?.close();
  }

  onClear(): void {
    this.form.reset();
    this.filterChange.emit(this.form.value as T);
    this.modalRef?.close();
  }

  getControl(key: string): FormControl {
    return this.form.get(key) as FormControl;
  }
}
