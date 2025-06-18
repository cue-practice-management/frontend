import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { Component, Input } from '@angular/core';
import { GradePracticeProcessDeliverableRequest, PracticeProcessDeliverable } from '../../practice-process.models';
import { Validators } from '@angular/forms';
import { PRACTICE_PROCESS_CONSTRAINTS } from '../../practice-process.constants';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { PracticeProcessDeliverableService } from '../../services/practice-process-deliverable.service';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import { Observable } from 'rxjs';
import { DynamicFormComponent } from "@organisms/dynamic-form/dynamic-form.component";

@Component({
  selector: 'app-grade-practice-process-deliverable-form',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './grade-practice-process-deliverable-form.component.html',
  styleUrl: './grade-practice-process-deliverable-form.component.scss'
})
export class GradePracticeProcessDeliverableFormComponent extends FormSubmitComponent<GradePracticeProcessDeliverableRequest, PracticeProcessDeliverable> {
  @Input() practiceProcessId!: string;
  @Input() deliverableId!: string;

  gradePracticeProcessDeliverableFormConfig: DynacmicFormConfig = {
    title: 'Calificar Entregable',
    buttonLabel: 'Calificar Entregable',
    sections: [
      {
        title: 'Información del Entregable',
        fields: [
          {
            key: 'grade',
            label: 'Calificación',
            placeholder: 'Ingresa la calificación del entregable',
            type: FormFieldType.NUMBER,
            validators: [Validators.required, Validators.min(PRACTICE_PROCESS_CONSTRAINTS.DELIVERABLE.GRADE.MIN), Validators.max(PRACTICE_PROCESS_CONSTRAINTS.DELIVERABLE.GRADE.MAX)]
          },
          {
            key: 'gradeObservations',
            label: 'Observaciones de la Calificación',
            placeholder: 'Ingresa observaciones sobre la calificación',
            type: FormFieldType.TEXTAREA,
            validators: [Validators.required],
          }
        ]
      }
    ]
  };

  constructor(
    private readonly practiceProcessDeliverableService: PracticeProcessDeliverableService,
    private readonly modalRef: ModalRef
  ) {
    super();
  }

  onFormSubmit(gradePracticeProcessDeliverableRequest: GradePracticeProcessDeliverableRequest): void {
    this.submitForm(gradePracticeProcessDeliverableRequest);
  }

  protected override submitData(data: GradePracticeProcessDeliverableRequest): Observable<PracticeProcessDeliverable> {
    return this.practiceProcessDeliverableService.gradePracticeProcessDeliverable(
      this.practiceProcessId,
      this.deliverableId,
      data
    );
  }

  protected override onSuccess(data: PracticeProcessDeliverable): void {
    this.modalRef.close(data);
  }
}
