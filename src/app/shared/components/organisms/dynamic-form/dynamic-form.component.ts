import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { InputFormRowComponent } from '../../molecules/input-form-row/input-form-row.component';
import { DynacmicFormConfig } from './dynamic.form.models';
import { ButtonComponent } from '../../atoms/button/button.component';
import { SpinnerComponent } from '../../atoms/spinner/spinner.component';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, InputFormRowComponent, ButtonComponent, SpinnerComponent],
})
export class DynamicFormComponent<T> implements OnInit {
  @Input() dynamicFormConfig!: DynacmicFormConfig;
  @Input() isLoading = false;
  @Output() submitted = new EventEmitter<T>();
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const controlsConfig: Record<string, any> = {};

    this.dynamicFormConfig.sections.forEach(section => {
      section.fields.forEach(field => {
        const control = {
          value: field.value ?? '',
          disabled: field.disabled ?? false
        };
        controlsConfig[field.key] = [control, field.validators ?? []];
      });
    });

    this.form = this.fb.group(controlsConfig);
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submitted.emit(this.form.getRawValue());
    } else {
      this.form.markAllAsTouched();
    }
  }

  getFormControl(key: string): FormControl {
    return this.form.get(key) as FormControl;
  }

  get buttonLabel(): string {
    return this.dynamicFormConfig.buttonLabel || 'Enviar';
  }
}
