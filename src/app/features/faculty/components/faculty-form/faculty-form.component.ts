import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CreateFacultyRequest, Faculty } from '../../faculty.models';
import { DynamicFormComponent } from '@/shared/components/organisms/dynamic-form/dynamic-form.component';
import { Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { FacultyService } from '../../services/faculty.service';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import { Observable } from 'rxjs';
import { FACULTY_MIN_DESCRIPTION_LENGTH, FACULTY_MIN_NAME_LENGTH } from '../../faculty.constants';


@Component({
  selector: 'app-faculty-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DynamicFormComponent],
  templateUrl: './faculty-form.component.html',
  styleUrl: './faculty-form.component.scss'
})
export class FacultyFormComponent extends FormSubmitComponent<Partial<Faculty>, Faculty> implements OnInit, OnChanges {
  @Input() faculty!: Faculty | null;
  facultyFormConfig!: DynacmicFormConfig;

  constructor(private facultyService: FacultyService, private modalRef: ModalRef) {
    super();
  }

  ngOnInit(): void {
    this.updateFormConfig();
  }

  ngOnChanges(): void {
    this.updateFormConfig();
  }

  private updateFormConfig(): void {
    this.facultyFormConfig = {
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
              validators: [Validators.required, Validators.minLength(FACULTY_MIN_NAME_LENGTH)]
            },
            {
              key: 'description',
              label: 'Descripción',
              value: this.faculty?.description,
              type: FormFieldType.TEXT,
              placeholder: 'Breve descripción',
              validators: [Validators.required, Validators.minLength(FACULTY_MIN_DESCRIPTION_LENGTH)]
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
  }

  override submitData(data: CreateFacultyRequest): Observable<Faculty> {
    if (this.faculty) {
      return this.facultyService.updateFaculty(this.faculty._id, data);
    } else {
      return this.facultyService.createFaculty(data);
    }
  }

  override onSuccess = (faculty: Faculty): void => {
    this.modalRef.close(faculty);
  };

  onFormSubmit(formValue: CreateFacultyRequest): void {
    this.submitForm(formValue);
  }
}
