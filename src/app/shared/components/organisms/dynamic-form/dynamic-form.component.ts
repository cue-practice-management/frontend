import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { InputFormRowComponent } from '../../molecules/input-form-row/input-form-row.component';
import { DynacmicFormConfig, FormField } from './dynamic.form.models';
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
  @Output() fieldChanged = new EventEmitter<{ key: string; value: any; form: FormGroup }>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.buildForm(this.dynamicFormConfig);
    this.subscribeToFieldChanges(this.dynamicFormConfig);
    this.updateControlsVisibility();
    this.form.valueChanges.subscribe(() => this.updateControlsVisibility());
  }


  private buildForm(config: DynacmicFormConfig): FormGroup {
    const controlsConfig: Record<string, any> = {};

    config.sections.forEach(section =>
      section.fields.forEach(field => {
        controlsConfig[field.key] = [
          { value: field.value ?? '', disabled: field.disabled ?? false },
          field.validators ?? [],
        ];
      })
    );

    const formGroup = this.fb.group(controlsConfig, {
      validators: config.groupValidators || []
    });

    return formGroup;
  }

  private subscribeToFieldChanges(config: DynacmicFormConfig): void {
    config.sections.forEach(section =>
      section.fields.forEach(field => {
        const control = this.form.get(field.key);
        if (control) {
          control.valueChanges.subscribe(value => {
            this.fieldChanged.emit({ key: field.key, value, form: this.form });
          });
        }
      })
    );
  }

  private updateControlsVisibility(): void {
    this.dynamicFormConfig.sections.forEach(section =>
      section.fields.forEach(field => {
        const control = this.form.get(field.key);
        if (!control || !field.hiddenWhen) return;

        if (field.hiddenWhen(this.form)) {
          control.disable({ emitEvent: false });
        } else {
          control.enable({ emitEvent: false });
        }
      })
    );
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

  shouldHideField(field: FormField): boolean {
    return typeof field.hiddenWhen === 'function' && field.hiddenWhen(this.form);
  }

  get buttonLabel(): string {
    return this.dynamicFormConfig.buttonLabel || 'Enviar';
  }

}