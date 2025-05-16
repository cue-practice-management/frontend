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
import { TypeaheadService } from '@/core/services/typeahead.service';

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
    private typeaheadService: TypeaheadService,
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
              key: 'facultyName',
              label: 'Facultad',
              type: FormFieldType.TYPEAHEAD,
              placeholder: 'Busca una facultad...',
              typeaheadConfig: this.typeaheadService.createTypaheadConfig(
                (term) => this.facultyService.getTypeaheadFaculties(term),
              ),
              validators: [Validators.required]
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

}
