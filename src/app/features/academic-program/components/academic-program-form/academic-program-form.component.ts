import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AcademicProgram, CreateAcademicProgramRequest, UpdateAcademicProgramRequest } from '../../academic-program.models';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import { AcademicProgramService } from '../../services/academic-program.service';
import { Validators } from '@angular/forms';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { Observable } from 'rxjs';
import { DynamicFormComponent } from "@organisms/dynamic-form/dynamic-form.component";
import { FacultyService } from '@/features/faculty/services/faculty.service';
import { MAX_SEMESTER_DURATION, MIN_SEMESTER_DURATION } from '../../academic-program.constants';
import { TypeaheadConfig } from '@/shared/models/typeahead-item.model';

@Component({
  selector: 'app-academic-program-form',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './academic-program-form.component.html',
  styleUrl: './academic-program-form.component.scss'
})
export class AcademicProgramFormComponent extends FormSubmitComponent<CreateAcademicProgramRequest | UpdateAcademicProgramRequest, AcademicProgram> implements OnInit, OnChanges {

  @Input() academicProgram!: AcademicProgram | null;
  academicProgramFormConfig!: DynacmicFormConfig;

  constructor(
    private academicProgramService: AcademicProgramService,
    private facultyService: FacultyService,
    private modalRef: ModalRef) {
    super();
  }

  ngOnInit(): void {
    this.updateFormConfig();
  }

  ngOnChanges(): void {
    this.updateFormConfig();
  }

  private updateFormConfig(): void {
    this.academicProgramFormConfig = {
      title: this.academicProgram ? 'Editar programa académico' : 'Crear programa académico',
      buttonLabel: this.academicProgram ? 'Guardar cambios' : 'Crear programa académico',
      sections: [
        {
          fields: [
            {
              key: 'name',
              label: 'Nombre',
              value: this.academicProgram?.name,
              type: FormFieldType.TEXT,
              placeholder: 'Nombre del programa académico',
              validators: [Validators.required]
            },
            {
              key: 'description',
              label: 'Descripción',
              value: this.academicProgram?.description,
              type: FormFieldType.TEXT,
              placeholder: 'Breve descripción',
              validators: [Validators.required]
            },
            {
              key: 'durationInSemesters',
              label: 'Duración en semestres',
              value: this.academicProgram?.durationInSemesters,
              type: FormFieldType.NUMBER,
              placeholder: 'Duración en semestres',
              validators: [Validators.required, Validators.min(MIN_SEMESTER_DURATION), Validators.max(MAX_SEMESTER_DURATION)],
            },
            {
              key: 'faculty',
              label: 'Facultad',
              value: this.academicProgram?.faculty._id,
              type: FormFieldType.TYPEAHEAD,
              placeholder: 'Busca una facultad...',
              typeaheadConfig: this.facultyTypeaheadConfig,
              validators: [Validators.required]
            },
            {
              key: 'coordinatorName',
              label: 'Coordinador',
              value: this.academicProgram?.coordinatorName,
              type: FormFieldType.TEXT,
              placeholder: 'Nombre del coordinador',
              validators: [Validators.required]
            },
            {
              key: 'coordinatorEmail',
              label: 'Email del coordinador',
              value: this.academicProgram?.coordinatorEmail,
              type: FormFieldType.TEXT,
              placeholder: 'Email del coordinador',
              validators: [Validators.required, Validators.email]
            }
          ]
        }
      ]
    };
  }

  override submitData(data: CreateAcademicProgramRequest | UpdateAcademicProgramRequest): Observable<AcademicProgram> {
    if (this.academicProgram) {
      return this.academicProgramService.updateAcademicProgram(this.academicProgram._id, data as UpdateAcademicProgramRequest);
    } else {
      return this.academicProgramService.createAcademicProgram(data as CreateAcademicProgramRequest);
    }
  }

  override onSuccess(): void {
    this.modalRef.close(true);
  }

  onFormSubmit(formValue: CreateAcademicProgramRequest | UpdateAcademicProgramRequest): void {
    this.submitForm(formValue);
  }

  get facultyTypeaheadConfig(): TypeaheadConfig {
    const config: TypeaheadConfig = {
      placeholder: 'Busca una facultad...',
      retrieveOptions: (term: string) => this.facultyService.getTypeaheadFaculties(term),
    }
    if (this.academicProgram) {
      config.retrieveOptionsFromExistingValue = () => this.facultyService.getTypeaheadFaculties(this.academicProgram!.faculty.name);
    }

    return config;
  }

}
