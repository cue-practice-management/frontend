import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { Component, Input } from '@angular/core';
import { PracticeProcessDeliverable, SubmitPracticeProcessDeliverableRequest } from '../../practice-process.models';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { Validators } from '@angular/forms';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { PracticeProcessDeliverableService } from '../../services/practice-process-deliverable.service';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import { Observable } from 'rxjs';
import { DynamicFormComponent } from "../../../../shared/components/organisms/dynamic-form/dynamic-form.component";

@Component({
  selector: 'app-submit-practice-process-deliverable-form',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './submit-practice-process-deliverable-form.component.html',
  styleUrl: './submit-practice-process-deliverable-form.component.scss'
})
export class SubmitPracticeProcessDeliverableFormComponent extends FormSubmitComponent<SubmitPracticeProcessDeliverableRequest, PracticeProcessDeliverable> {
  @Input() practiceProcessId!: string;
  @Input() deliverableId!: string;

  submitPracticeProcessDeliverableFormConfig: DynacmicFormConfig = {
    title: 'Enviar Entregable',
    buttonLabel: 'Enviar Entregable',
    sections: [
      {
        title: 'Información del Entregable',
        fields: [
          {
            key: 'file',
            label: 'Archivo del Entregable',
            placeholder: 'Selecciona el archivo del entregable',
            type: FormFieldType.FILE,
            validators: [Validators.required],
            fileConfig: {
              accept: 'application/pdf'
            }
          },
        ]
      }
    ]
  }

  constructor(
    private readonly practiceProcessDeliverableService: PracticeProcessDeliverableService,
    private readonly modalRef: ModalRef
  ) {
    super();
  }

  onFormSubmit(submitPracticeProcessDeliverableRequest: SubmitPracticeProcessDeliverableRequest): void {
    this.submitForm(submitPracticeProcessDeliverableRequest);
  }

  protected override submitData(data: SubmitPracticeProcessDeliverableRequest): Observable<PracticeProcessDeliverable> {
    return this.practiceProcessDeliverableService.submitPracticeProcessDeliverable(
      this.practiceProcessId,
      this.deliverableId,
      data
    );
  }

  protected override onSuccess(data: PracticeProcessDeliverable): void {
    this.modalRef.close(data);
  }

}
