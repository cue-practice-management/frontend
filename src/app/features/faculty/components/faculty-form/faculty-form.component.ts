import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Faculty } from '../../faculty.models';
import { DynamicFormComponent } from '@/shared/components/organisms/dynamic-form/dynamic-form.component';
import { Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { FormFieldType } from '@/shared/models/form-field-type.enum';

@Component({
  selector: 'app-faculty-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DynamicFormComponent],
  templateUrl: './faculty-form.component.html',
  styleUrl: './faculty-form.component.scss'
})
export class FacultyFormComponent {
  @Input() faculty?: Faculty;
  @Input() isLoading = false;
  @Output() submitted = new EventEmitter<Partial<Faculty>>();

  readonly dynamicFormConfig: DynacmicFormConfig = {
    title: this.faculty ? 'Editar facultad' : 'Crear facultad',
    buttonLabel: this.faculty ? 'Guardar cambios' : 'Crear facultad',
    sections: [
      {
        fields: [
          {
            key: 'name',
            label: 'Nombre',
            value: this.faculty?.name,
            type: FormFieldType.TEXT,
            placeholder: 'Nombre de la facultad',
            validators: [Validators.required]
          },
          {
            key: 'description',
            label: 'Descripción',
            value: this.faculty?.description,
            type: FormFieldType.TEXT,
            placeholder: 'Breve descripción',
            validators: [Validators.required]
          },
          {
            key: 'deanName',
            label: 'Nombre del decano',
            value: this.faculty?.deanName,
            type: FormFieldType.TEXT,
            placeholder: 'Nombre del decano',
            validators: [Validators.required]
          },
          {
            key: 'deanEmail',
            label: 'Email del decano',
            value: this.faculty?.deanEmail,
            type: FormFieldType.TEXT,
            placeholder: 'correo@ejemplo.com',
            validators: [Validators.required, Validators.email]
          }
        ]
      }
    ]
  };


  onFormSubmit(data: Partial<Faculty>) {
    this.submitted.emit(data);
  }
}
