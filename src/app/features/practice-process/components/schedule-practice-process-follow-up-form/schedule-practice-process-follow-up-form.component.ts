import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { Component, Input } from '@angular/core';
import { PracticeProcessFollowUp, SchedulePracticeProcessFollowUpRequest } from '../../practice-process.models';
import { PracticeProcessFollowUpService } from '../../services/practice-process-follow-up.service';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import { Observable } from 'rxjs';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { Validators } from '@angular/forms';
import { PRACTICE_PROCESS_FOLLOW_UP_MODE_SELECT_OPTIONS } from '@/core/constants/select-options.constants';
import { PracticeProcessFollowUpMode } from '../../practice-process.enums';
import { DynamicFormComponent } from "../../../../shared/components/organisms/dynamic-form/dynamic-form.component";
import { futureDateValidator } from '@/core/validators/future-date.validator';

@Component({
  selector: 'app-schedule-practice-process-follow-up-form',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './schedule-practice-process-follow-up-form.component.html',
  styleUrl: './schedule-practice-process-follow-up-form.component.scss'
})
export class SchedulePracticeProcessFollowUpFormComponent extends FormSubmitComponent<SchedulePracticeProcessFollowUpRequest, PracticeProcessFollowUp> {
  @Input() practiceProcessId!: string;

  constructor(
    private readonly practiceProcessFollowUpService: PracticeProcessFollowUpService,
    private readonly modalRef: ModalRef
  ) {
    super();
  }

  onFormSubmit(data: SchedulePracticeProcessFollowUpRequest): void {
    this.submitForm(data);
  }

  protected override submitData(data: SchedulePracticeProcessFollowUpRequest): Observable<PracticeProcessFollowUp> {
    return this.practiceProcessFollowUpService.schedulePracticeProcessFollowUp(this.practiceProcessId, data);
  }

  protected override onSuccess(result: PracticeProcessFollowUp): void {
    this.modalRef.close(result);
  }

  schedulePracticeProcessFollowUpFormConfig: DynacmicFormConfig = {
    title: 'Programar seguimiento de proceso de práctica',
    sections: [
      {
        title: 'Información del seguimiento',
        fields: [
          {
            key: 'mode',
            label: 'Modalidad del seguimiento',
            placeholder: 'Seleccione una modalidad',
            type: FormFieldType.SELECT,
            selectOptions: PRACTICE_PROCESS_FOLLOW_UP_MODE_SELECT_OPTIONS,
            validators: [Validators.required],
          },
          {
            key: 'date',
            label: 'Fecha y hora del seguimiento',
            type: FormFieldType.DATETIME_LOCAL,
            validators: [Validators.required, futureDateValidator],
          },
          {
            key: 'location',
            label: 'Ubicación',
            type: FormFieldType.TEXT,
            hiddenWhen: (form) => {
              const mode = form.get('mode')?.value;
              return !mode || mode === PracticeProcessFollowUpMode.ONLINE;
            },
            validators: [Validators.required],
          },
          {
            key: 'meetingUrl',
            label: 'Enlace de la reunión',
            type: FormFieldType.TEXT,
            hiddenWhen: (form) => {
              const mode = form.get('mode')?.value;
              return !mode || mode === PracticeProcessFollowUpMode.IN_PERSON;
            },
            validators: [Validators.required, Validators.pattern('https?://.+')],
          }
        ]
      }
    ],
    buttonLabel: 'Programar seguimiento',
  }


}
