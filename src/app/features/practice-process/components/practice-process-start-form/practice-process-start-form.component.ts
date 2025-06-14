import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { Component } from '@angular/core';
import { PracticeProcess, StartPracticeProcessRequest } from '../../practice-process.models';
import { Observable } from 'rxjs';
import { PracticeProcessService } from '../../services/practice-process.service';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { DynamicFormComponent } from "@organisms/dynamic-form/dynamic-form.component";
import { StudentService } from '@/features/student/services/student.service';
import { ProfessorService } from '@/features/professor/services/professor.service';
import { PracticeDefinitionService } from '@/features/practice-definition/services/practice-definition.service';
import { dateRangeValidator } from '@/core/validators/date-range.validator';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-practice-process-start-form',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './practice-process-start-form.component.html',
  styleUrl: './practice-process-start-form.component.scss'
})
export class PracticeProcessStartFormComponent extends FormSubmitComponent<StartPracticeProcessRequest, PracticeProcess> {

  practiceProcessStartFormConfig: DynacmicFormConfig = {
    title: 'Iniciar Proceso de Práctica',
    buttonLabel: 'Iniciar Proceso',
    groupValidators: [dateRangeValidator],
    sections: [
      {
        title: 'Información del Proceso',
        fields: [
          {
            key: 'student',
            label: 'Estudiante',
            type: FormFieldType.TYPEAHEAD,
            typeaheadConfig: {
              placeholder: 'Buscar estudiante',
              retrieveOptions: (term: string) => this.studentService.getStudentsTypeahead(term)
            },
            validators: [Validators.required]
          },
          {
            key: 'professor',
            label: 'Profesor',
            type: FormFieldType.TYPEAHEAD,
            typeaheadConfig: {
              placeholder: 'Buscar profesor',
              retrieveOptions: (term: string) => this.professorService.getProfessorsTypeahead(term)
            },
            validators: [Validators.required]
          },
          {
            key: 'practiceDefinition',
            label: 'Práctica',
            type: FormFieldType.TYPEAHEAD,
            typeaheadConfig: {
              placeholder: 'Buscar definición de práctica',
              retrieveOptions: (term: string) => this.practiceDefinitionService.getPracticeDefinitionTypeahead(term)
            },
            validators: [Validators.required]
          },
          {
            key: 'startDate',
            label: 'Fecha de Inicio',
            type: FormFieldType.DATE,
            validators: [Validators.required]
          },
          {
            key: 'endDate',
            label: 'Fecha de Fin',
            type: FormFieldType.DATE,
            validators: [Validators.required]
          }
        ]

      }
    ]
  }
  constructor(
    private readonly practiceProcessService: PracticeProcessService,
    private readonly studentService: StudentService,
    private readonly professorService: ProfessorService,
    private readonly practiceDefinitionService: PracticeDefinitionService,
    private readonly modalRef: ModalRef
  ) {
    super();
  }

  onFormSubmit(data: StartPracticeProcessRequest): void {
    this.submitForm(data);
  }

  protected override submitData(data: StartPracticeProcessRequest): Observable<PracticeProcess> {
    return this.practiceProcessService.startPracticeProcess(data);
  }

  protected override onSuccess(data: PracticeProcess): void {
    this.modalRef.close(data);
  }

}
