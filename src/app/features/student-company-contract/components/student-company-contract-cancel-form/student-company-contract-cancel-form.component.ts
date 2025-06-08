import { Component, Input } from '@angular/core';
import { DynamicFormComponent } from "../../../../shared/components/organisms/dynamic-form/dynamic-form.component";
import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { CancelStudentCompanyContractRequest, StudentCompanyContract } from '../../student-company-contract.models';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { STUDENT_COMPANY_CONTRACT_CANCELLED_BY_SELECT_OPTIONS } from '@/core/constants/select-options.constants';
import { StudentCompanyContractService } from '../../services/student-company-contract.service';
import { Observable } from 'rxjs';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-student-company-contract-cancel-form',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './student-company-contract-cancel-form.component.html',
  styleUrl: './student-company-contract-cancel-form.component.scss'
})
export class StudentCompanyContractCancelFormComponent extends FormSubmitComponent<CancelStudentCompanyContractRequest, StudentCompanyContract> {
  @Input() contract!: StudentCompanyContract;

  studentCompanyContractCancelFormConfig: DynacmicFormConfig = {
    title: 'Cancelar contrato de práctica',
    buttonLabel: 'Cancelar contrato',
    sections: [
      {
        title: 'Información del contrato',
        fields: [
          {
            key: 'cancellationReason',
            label: 'Motivo de cancelación',
            type: FormFieldType.TEXTAREA,
            validators: [Validators .required],
          },
          {
            key: 'cancellationDate',
            label: 'Fecha de cancelación',
            type: FormFieldType.DATE,
            validators: [Validators.required],
          },
          {
            key: 'cancelledBy',
            label: 'Cancelado por',
            type: FormFieldType.SELECT,
            selectOptions: STUDENT_COMPANY_CONTRACT_CANCELLED_BY_SELECT_OPTIONS,
            validators: [Validators.required],
          }
        ]
      }
    ]
  }
  constructor(
    private readonly studentCompanyContractService: StudentCompanyContractService,
    private readonly modalRef: ModalRef) {
    super();
  }

  onFormSubmit(formValue: CancelStudentCompanyContractRequest): void {
    this.submitForm(formValue);
  }

  override submitData(data: CancelStudentCompanyContractRequest): Observable<StudentCompanyContract> {
    return this.studentCompanyContractService.cancelStudentCompanyContract(this.contract._id, data);
  }

  override onSuccess = (res: StudentCompanyContract): void => {
    this.modalRef.close(res);
  };
}
