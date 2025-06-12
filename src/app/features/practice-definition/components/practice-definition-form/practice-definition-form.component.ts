import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { Component, Input, OnInit } from '@angular/core';
import { CreatePracticeDefinitionRequest, PracticeDefinition, UpdatePracticeDefinitionRequest } from '../../practice-definition.models';
import { PracticeDefinitionService } from '../../services/practice-definition.service';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { Validators } from '@angular/forms';
import { PRACTICE_DEFINITION_CONTRAINTS } from '../../practice-defintion.constants';
import { TypeaheadConfig } from '@/shared/models/typeahead-item.model';
import { AcademicProgramService } from '@/features/academic-program/services/academic-program.service';
import { PracticeTemplateService } from '@/features/practice-template/services/practice-template.service';
import { Observable } from 'rxjs';
import { DynamicFormComponent } from "@organisms/dynamic-form/dynamic-form.component";

@Component({
  selector: 'app-practice-definition-form',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './practice-definition-form.component.html',
  styleUrl: './practice-definition-form.component.scss'
})
export class PracticeDefinitionFormComponent extends FormSubmitComponent<CreatePracticeDefinitionRequest | UpdatePracticeDefinitionRequest, PracticeDefinition> implements OnInit {
  @Input() practiceDefinition!: PracticeDefinition | null;

  practiceDefinitionFormConfig!: DynacmicFormConfig;

  constructor(
    private practiceDefinitionService: PracticeDefinitionService,
    private academicProgramService: AcademicProgramService,
    private practiceTemplateService: PracticeTemplateService,
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
    this.practiceDefinitionFormConfig = {
      title: this.practiceDefinition ? 'Editar Práctica' : 'Crear Práctica',
      buttonLabel: this.practiceDefinition ? 'Guardar cambios' : 'Crear Práctica',
      sections: [
        {
          title: 'Información de la práctica',
          fields: [
            {
              key: 'name',
              label: 'Nombre de la práctica',
              value: this.practiceDefinition?.name,
              type: FormFieldType.TEXT,
              placeholder: 'Nombre de la práctica',
              validators: [Validators.required]
            },
            {
              key: 'description',
              label: 'Descripción de la práctica',
              value: this.practiceDefinition?.description,
              type: FormFieldType.TEXTAREA,
              placeholder: 'Descripción de la práctica',
              validators: [Validators.required]
            },
            {
              key: 'semester',
              label: 'Semestre',
              value: this.practiceDefinition?.semester,
              type: FormFieldType.NUMBER,
              placeholder: 'Semestre en el que se realiza la práctica',
              validators: [Validators.required, Validators.min(PRACTICE_DEFINITION_CONTRAINTS.SEMESTER.MIN), Validators.max(PRACTICE_DEFINITION_CONTRAINTS.SEMESTER.MAX)]
            },
            {
              key: 'academicProgram',
              label: 'Programa Académico',
              value: this.practiceDefinition?.academicProgram?._id,
              type: FormFieldType.TYPEAHEAD,
              placeholder: 'Busca un programa académico...',
              typeaheadConfig: this.academicProgramTypeaheadConfig,
              validators: [Validators.required]
            },
            {
              key: 'practiceTemplate',
              label: 'Plantilla de Práctica',
              value: this.practiceDefinition?.practiceTemplate?._id,
              type: FormFieldType.TYPEAHEAD,
              placeholder: 'Busca una plantilla de práctica...',
              typeaheadConfig: this.practiceTemplateTypeaheadConfig,
              validators: [Validators.required]
            }
          ]
        }
      ]
    };
  }

  protected override submitData(data: UpdatePracticeDefinitionRequest | CreatePracticeDefinitionRequest): Observable<PracticeDefinition> {
    if (this.practiceDefinition) {
      return this.practiceDefinitionService.updatePracticeDefinition(this.practiceDefinition._id, data as UpdatePracticeDefinitionRequest);
    } else {
      return this.practiceDefinitionService.createPracticeDefinition(data as CreatePracticeDefinitionRequest);
    }
  }

  override onSuccess = (data: PracticeDefinition): void => {
    this.modalRef.close(data);
  };

  onFormSubmit(formValue: CreatePracticeDefinitionRequest | UpdatePracticeDefinitionRequest): void {
    this.submitForm(formValue);
  }

  get academicProgramTypeaheadConfig(): TypeaheadConfig {
    const config: TypeaheadConfig = {
      placeholder: 'Busca un programa académico...',
      retrieveOptions: (term: string) => this.academicProgramService.getTypeaheadAcademicPrograms(term),
    }
    if (this.practiceDefinition) {
      config.retrieveOptionsFromExistingValue = () => this.academicProgramService.getTypeaheadAcademicPrograms(this.practiceDefinition!.academicProgram.name);
    }

    return config;
  }

  get practiceTemplateTypeaheadConfig(): TypeaheadConfig {
    const config: TypeaheadConfig = {
      placeholder: 'Busca una plantilla de práctica...',
      retrieveOptions: (term: string) => this.practiceTemplateService.getTypeaheadPracticeTemplates(term),
    }
    if (this.practiceDefinition) {
      config.retrieveOptionsFromExistingValue = () => this.practiceTemplateService.getTypeaheadPracticeTemplates(this.practiceDefinition!.practiceTemplate.name);
    }

    return config;
  }

}
