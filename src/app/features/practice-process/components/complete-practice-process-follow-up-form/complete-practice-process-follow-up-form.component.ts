import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { Component, Input } from '@angular/core';
import { CompletePracticeProcessFollowUpRequest, PracticeProcessFollowUp } from '../../practice-process.models';
import { PracticeProcessFollowUpService } from '../../services/practice-process-follow-up.service';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import { Observable } from 'rxjs';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { Validators } from '@angular/forms';
import { DynamicFormComponent } from "../../../../shared/components/organisms/dynamic-form/dynamic-form.component";

@Component({
  selector: 'app-complete-practice-process-follow-up-form',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './complete-practice-process-follow-up-form.component.html',
  styleUrl: './complete-practice-process-follow-up-form.component.scss'
})
export class CompletePracticeProcessFollowUpFormComponent extends FormSubmitComponent<CompletePracticeProcessFollowUpRequest, PracticeProcessFollowUp> {
  @Input() practiceProcessId!: string;
  @Input() followUpId!: string;

  constructor(
    private readonly practiceProcessFollowUpService: PracticeProcessFollowUpService,
    private readonly modalRef: ModalRef,

  ) {
    super();
  }

  onFormSubmit(data: CompletePracticeProcessFollowUpRequest): void {
    this.submitForm(data);
  }

  protected override submitData(data: CompletePracticeProcessFollowUpRequest): Observable<PracticeProcessFollowUp> {
    return this.practiceProcessFollowUpService.completePracticeProcessFollowUp(this.practiceProcessId, this.followUpId, data);
  }

  protected override onSuccess(result: PracticeProcessFollowUp): void {
    this.modalRef.close(result);
  }

  completePracticeProcessFollowUpFormConfig: DynacmicFormConfig = {
    title: 'Completar seguimiento de proceso de práctica',
    sections: [
      {
        title: 'Información del seguimiento',
        fields: [
          {
            key: 'outcomeNotes',
            label: 'Observaciones del seguimiento',
            placeholder: 'Ingrese las observaciones del seguimiento',
            type: FormFieldType.TEXTAREA,
            validators: [Validators.required],
          },
        ],
      },
    ],
  };

}
