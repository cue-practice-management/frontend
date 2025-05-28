import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CreateProfessorRequest, Professor, UpdateProfessorRequest } from '../../professor.models';
import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { ProfessorService } from '../../services/professor.service';
import { AcademicProgramService } from '@/features/academic-program/services/academic-program.service';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import { TypeaheadConfig } from '@/shared/models/typeahead-item.model';
import { Observable } from 'rxjs';
import { Validators } from '@angular/forms';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { Gender } from '@/core/enums/gender.enum';
import { colombianPhoneValidator } from '@/core/validators/colombian-phone.validator';
import { DOCUMENT_TYPE_SELECT_OPTIONS } from '@/core/constants/select-options.constants';
import { DynamicFormComponent } from "@organisms/dynamic-form/dynamic-form.component";

@Component({
  selector: 'app-professor-form',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './professor-form.component.html',
  styleUrl: './professor-form.component.scss'
})
export class ProfessorFormComponent  extends FormSubmitComponent<CreateProfessorRequest | UpdateProfessorRequest, Professor> implements OnInit, OnChanges {
  @Input() professor!: Professor | null;
    professorFormConfig!: DynacmicFormConfig;
  
    constructor(
      private professorService: ProfessorService,
      private academicProgramService: AcademicProgramService,
      private modalRef: ModalRef
    ) {
      super();
    }
  
  
    ngOnInit(): void {
      this.updateFormConfig();
    }
  
    ngOnChanges(): void {
      this.updateFormConfig();
    }
  
    private updateFormConfig(): void {
      this.professorFormConfig = {
        title: this.professor ? 'Editar profesor' : 'Crear profesor',
        buttonLabel: this.professor ? 'Guardar cambios' : 'Crear profesor',
        sections: [
          {
            title: 'Información del Profesor',
            fields: [
              {
                key: 'firstName',
                label: 'Nombre',
                value: this.professor?.firstName,
                type: FormFieldType.TEXT,
                placeholder: 'Nombre del profesor',
                validators: [Validators.required]
              },
              {
                key: 'lastName',
                label: 'Apellido',
                value: this.professor?.lastName,
                type: FormFieldType.TEXT,
                placeholder: 'Apellido del profesor',
                validators: [Validators.required]
              },
              {
                key: 'email',
                label: 'Correo electrónico',
                value: this.professor?.email,
                type: FormFieldType.TEXT,
                placeholder: 'Correo electrónico del profesor',
                validators: [Validators.required, Validators.email]
              },
              {
                key: 'typeOfDocument',
                label: 'Tipo de documento',
                value: this.professor?.typeOfDocument,
                type: FormFieldType.SELECT,
                selectOptions: DOCUMENT_TYPE_SELECT_OPTIONS,
                placeholder: 'Selecciona un tipo de documento',
                validators: [Validators.required]
              },
              {
                key: 'documentNumber',
                label: 'Número de documento',
                value: this.professor?.documentNumber,
                type: FormFieldType.TEXT,
                placeholder: 'Número de documento del profesor',
                validators: [Validators.required]
              },
              {
                key: 'phoneNumber',
                label: 'Número de teléfono',
                value: this.professor?.phoneNumber,
                type: FormFieldType.TEXT,
                validators: [colombianPhoneValidator()],
                placeholder: 'Número de teléfono del profesor'
              },
              {
                key: 'gender',
                label: 'Género',
                value: this.professor?.gender,
                type: FormFieldType.SELECT,
                placeholder: 'Selecciona un género',
                selectOptions: [
                  { label: 'Masculino', value: Gender.MALE },
                  { label: 'Femenino', value: Gender.FEMALE },
                  { label: 'Otro', value: Gender.OTHER },
                ],
                validators: [Validators.required]
              },
  
            ]
          },
          {
            title: 'Información académica',
            fields: [
              {
                key: 'academicProgram',
                label: 'Programa académico',
                value: this.professor?.academicProgram._id,
                type: FormFieldType.TYPEAHEAD,
                placeholder: 'Busca un programa académico...',
                typeaheadConfig: this.academicProgramTypeaheadConfig,
                validators: [Validators.required]
              }
            ]
          }
        ]
      };
    }
  
    protected override submitData(data: UpdateProfessorRequest | CreateProfessorRequest): Observable<Professor> {
      if (this.professor) {
        return this.professorService.updateProfessor(this.professor._id, data);
      } else {
        return this.professorService.creatProfessor(data as CreateProfessorRequest);
      }
    }
  
    override onSuccess = (professor: Professor): void => {
      this.modalRef.close(professor);
    };
  
    onFormSubmit(formValue: CreateProfessorRequest): void {
      this.submitForm(formValue);
    }
  
    get academicProgramTypeaheadConfig(): TypeaheadConfig {
      const config: TypeaheadConfig = {
        placeholder: 'Busca un programa académico...',
        retrieveOptions: (term: string) => this.academicProgramService.getTypeaheadAcademicPrograms(term),
      }
      if (this.professor) {
        config.retrieveOptionsFromExistingValue = () => this.academicProgramService.getTypeaheadAcademicPrograms(this.professor!.academicProgram.name);
      }
  
      return config;
    }

}
