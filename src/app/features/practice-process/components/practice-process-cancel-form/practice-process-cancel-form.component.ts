import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { Component, Input } from '@angular/core';
import { DynamicFormComponent } from "@organisms/dynamic-form/dynamic-form.component";
import { CancelPracticeProcessRequest, PracticeProcess } from '../../practice-process.models';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { Validators } from '@angular/forms';
import { PRACTICE_PROCESS_CANCELLED_BY_SELECT_OPTIONS } from '@/core/constants/select-options.constants';
import { PracticeProcessService } from '../../services/practice-process.service';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-practice-process-cancel-form',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './practice-process-cancel-form.component.html',
  styleUrl: './practice-process-cancel-form.component.scss'
})
export class PracticeProcessCancelFormComponent extends FormSubmitComponent<CancelPracticeProcessRequest, PracticeProcess> {

  @Input() practiceProcessId!: string;

  practiceProcessCancelFormConfig: DynacmicFormConfig = {
    title: 'Cancelar Proceso de Práctica',
    buttonLabel: 'Cancelar Proceso',
    sections: [
      {
        title: 'Información de Cancelación',
        fields: [
          {
            key: 'cancellationReason',
            label: 'Motivo de Cancelación',
            placeholder: 'Ingrese el motivo de la cancelación',
            type: FormFieldType.TEXTAREA,
            validators: [Validators.required],
          },
          {
            key: 'cancelledBy',
            label: 'Cancelado Por',
            type: FormFieldType.SELECT,
            selectOptions: PRACTICE_PROCESS_CANCELLED_BY_SELECT_OPTIONS,
            validators: [Validators.required]
          }
        ]
      }
    ]
  };

  constructor(
    private readonly practiceProcessService: PracticeProcessService,
    private readonly modalRef: ModalRef
  ) {
    super();
  }

  onFormSubmit(data: CancelPracticeProcessRequest): void {
    this.submitForm(data);
  }

  protected override submitData(data: CancelPracticeProcessRequest): Observable<PracticeProcess> {
    return this.practiceProcessService.cancelPracticeProcess(this.practiceProcessId, data);
  }

  protected override onSuccess(res: PracticeProcess): void {
    this.modalRef.close(res);
  }
}
