import { Component, Input } from '@angular/core';
import { ActivateStudentCompanyContractRequest, StudentCompanyContract } from '../../student-company-contract.models';
import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { StudentCompanyContractService } from '../../services/student-company-contract.service';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DynamicFormComponent } from "@organisms/dynamic-form/dynamic-form.component";

@Component({
  selector: 'app-student-company-contract-activate-form',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './student-company-contract-activate-form.component.html',
  styleUrl: './student-company-contract-activate-form.component.scss'
})
export class StudentCompanyContractActivateFormComponent extends FormSubmitComponent<ActivateStudentCompanyContractRequest, StudentCompanyContract> {

  @Input() contract!: StudentCompanyContract;

  studentCompanyContractActivateFormConfig: DynacmicFormConfig = {
    title: 'Activar contrato de práctica',
    buttonLabel: 'Activar contrato',
    sections: [
      {
        title: 'Información del contrato',
        fields: [
          {
            key: 'startDate',
            label: 'Fecha de inicio',
            type: FormFieldType.DATE,
            validators: [Validators.required]
          },
          {
            key: 'endDate',
            label: 'Fecha de fin',
            type: FormFieldType.DATE,
            validators: [Validators.required],
          },
          {
            key:'isPaid',
            label: '¿Es remunerado?',
            type: FormFieldType.CHECKBOX,
            validators: [Validators.required],
          },
          {
            key: 'file',
            label: 'Archivo del contrato',
            type: FormFieldType.FILE,
            fileConfig: {
              accept: '/*',
            },
            validators: [Validators.required],
          }
        ]
      }
    ]
  }

  constructor(
    private readonly studentCompanyContractService: StudentCompanyContractService,
    private readonly modalRef: ModalRef
  ) {
    super();
  }

  onFormSubmit(formValue: ActivateStudentCompanyContractRequest): void {
    this.submitForm(formValue);
  }

  override submitData(data: ActivateStudentCompanyContractRequest): Observable<StudentCompanyContract> {
    return this.studentCompanyContractService.activateStudentCompanyContract(this.contract._id, data);
  }

  override onSuccess = (res: StudentCompanyContract): void => {
    this.modalRef.close(res);
  };
}
