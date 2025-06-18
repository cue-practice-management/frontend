import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { Component, Input } from '@angular/core';
import { CancelPracticeProcessFollowUpRequest, PracticeProcessFollowUp } from '../../practice-process.models';
import { PracticeProcessFollowUpService } from '../../services/practice-process-follow-up.service';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import { Observable } from 'rxjs';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { Validators } from '@angular/forms';
import { DynamicFormComponent } from "../../../../shared/components/organisms/dynamic-form/dynamic-form.component";

@Component({
  selector: 'app-cancel-practice-process-follow-up-form',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './cancel-practice-process-follow-up-form.component.html',
  styleUrl: './cancel-practice-process-follow-up-form.component.scss'
})
export class CancelPracticeProcessFollowUpFormComponent extends FormSubmitComponent<CancelPracticeProcessFollowUpRequest, PracticeProcessFollowUp> {
  @Input() practiceProcessId!: string;
  @Input() followUpId!: string;

  cancelPracticeProcessFollowUpFormConfig: DynacmicFormConfig = {
    title: 'Cancelar Seguimiento',
    sections: [
      {
        title: 'Información del Seguimiento',
        fields: [
          {
            key: 'cancellationReason',
            label: 'Motivo de Cancelación',
            type: FormFieldType.TEXTAREA,
            placeholder: 'Ingrese el motivo por el cual desea cancelar el seguimiento',
            validators: [Validators.required],
          }
        ]
      }
    ],
    buttonLabel: 'Cancelar Seguimiento',
  }

  constructor(
    private readonly practiceProcessFollowUpService: PracticeProcessFollowUpService,
    private readonly modalRef: ModalRef
  ) {
    super();
  }

  onSubmit(data: CancelPracticeProcessFollowUpRequest): void {
    this.submitForm(data);
  } 

  protected override submitData(data: CancelPracticeProcessFollowUpRequest): Observable<PracticeProcessFollowUp> {
    return this.practiceProcessFollowUpService.cancelPracticeProcessFollowUp(this.practiceProcessId, this.followUpId, data);
  }

  protected override onSuccess(res: PracticeProcessFollowUp): void {
    this.modalRef.close(res);
  }
}
