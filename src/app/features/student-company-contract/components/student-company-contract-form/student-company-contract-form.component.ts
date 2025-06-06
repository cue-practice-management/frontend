import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { Component, Input, OnInit } from '@angular/core';
import { CreateStudentCompanyContractRequest, StudentCompanyContract } from '../../student-company-contract.models';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { StudentCompanyContractService } from '../../services/student-company-contract.service';
import { StudentService } from '@/features/student/services/student.service';
import { CompanyService } from '@/features/company/services/company.service';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { Validators } from '@angular/forms';
import { STUDENT_COMPANY_CONTRACT_CANCELLED_BY_SELECT_OPTIONS, STUDENT_COMPANY_CONTRACT_STATUS_SELECT_OPTIONS } from '@/core/constants/select-options.constants';
import { StudentCompanyContractStatus } from '../../student-company-contract.enums';
import { Observable } from 'rxjs';
import { TypeaheadConfig } from '@/shared/models/typeahead-item.model';
import { DynamicFormComponent } from "@organisms/dynamic-form/dynamic-form.component";

@Component({
  selector: 'app-student-company-contract-form',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './student-company-contract-form.component.html',
  styleUrl: './student-company-contract-form.component.scss'
})
export class StudentCompanyContractFormComponent extends FormSubmitComponent<CreateStudentCompanyContractRequest, StudentCompanyContract> implements OnInit {
  @Input() contract: StudentCompanyContract | null = null;

  studentCompanyContractFormConfig!: DynacmicFormConfig;

  constructor(
    private readonly studentCompanyContractService: StudentCompanyContractService,
    private readonly studentService: StudentService,
    private readonly companyService: CompanyService,
    private readonly modalRef: ModalRef
  ) {
    super();
  }

  ngOnInit(): void {
    this.buildFormConfig();
  }

  private buildFormConfig(): void {
    const contract = this.contract;

    this.studentCompanyContractFormConfig = {
      title: contract ? 'Editar contrato de práctica' : 'Crear contrato de práctica',
      buttonLabel: contract ? 'Guardar cambios' : 'Crear contrato',
      sections: [
        {
          title: 'Información del contrato',
          fields: [
            {
              key: 'student',
              label: 'Estudiante',
              type: FormFieldType.TYPEAHEAD,
              typeaheadConfig: this.studentTypeaheadConfig,
              validators: [Validators.required],
              disabled: !!contract,
            },
            {
              key: 'company',
              label: 'Empresa',
              value: contract?.company?._id,
              type: FormFieldType.TYPEAHEAD,
              typeaheadConfig: this.companyTypeaheadConfig,
              validators: [Validators.required],
              disabled: !!contract,
            },
            {
              key: 'status',
              label: 'Estado del contrato',
              type: FormFieldType.SELECT,
              placeholder: 'Seleccione un estado',
              selectOptions: STUDENT_COMPANY_CONTRACT_STATUS_SELECT_OPTIONS,
              validators: [Validators.required],
            },
            {
              key: 'startDate',
              label: 'Fecha de inicio',
              type: FormFieldType.DATE,
              hiddenWhen: (form) => form.get('status')?.value !== StudentCompanyContractStatus.ACTIVE,
              validators: [Validators.required],
            },
            {
              key: 'endDate',
              label: 'Fecha de finalización',
              type: FormFieldType.DATE,
              hiddenWhen: (form) => form.get('status')?.value !== StudentCompanyContractStatus.ACTIVE,
              validators: [Validators.required],
            },
            {
              key: 'cancellationReason',
              label: 'Motivo de cancelación',
              type: FormFieldType.TEXT,
              hiddenWhen: (form) => form.get('status')?.value !== StudentCompanyContractStatus.CANCELLED,
              validators: [Validators.required],
            },
            {
              key: 'cancellationDate',
              label: 'Fecha de cancelación',
              type: FormFieldType.DATE,
              hiddenWhen: (form) => form.get('status')?.value !== StudentCompanyContractStatus.CANCELLED,
              validators: [Validators.required],
            },
            {
              key: 'cancelledBy',
              label: 'Cancelado por',
              type: FormFieldType.SELECT,
              hiddenWhen: (form) => form.get('status')?.value !== StudentCompanyContractStatus.CANCELLED,
              selectOptions: STUDENT_COMPANY_CONTRACT_CANCELLED_BY_SELECT_OPTIONS,
              validators: [Validators.required],
            },
            {
              key: 'file',
              label: 'Archivo del contrato',
              type: FormFieldType.FILE,
              fileConfig: {
                accept: '/*',
              },
              hiddenWhen: (form) => form.get('status')?.value !== StudentCompanyContractStatus.ACTIVE,
              validators: contract ? [] : [Validators.required],
            }
          ]
        }
      ]
    };
  }

  onFormSubmit(formValue: CreateStudentCompanyContractRequest): void {
    this.submitForm(formValue);
  }

  override submitData(data: CreateStudentCompanyContractRequest): Observable<StudentCompanyContract> {
    return this.studentCompanyContractService.createStudentCompanyContract(data);
  }

  override onSuccess = (res: StudentCompanyContract): void => {
    this.modalRef.close(res);
  };

  get studentTypeaheadConfig(): TypeaheadConfig {
    const config: TypeaheadConfig = {
      placeholder: 'Busca un estudiante...',
      retrieveOptions: (term: string) =>
        this.studentService.getStudentsTypeahead(term),
    };
    return config;
  }

  get companyTypeaheadConfig(): TypeaheadConfig {
    const config: TypeaheadConfig = {
      placeholder: 'Busca una empresa...',
      retrieveOptions: (term: string) =>
        this.companyService.getTypeaheadCompanies(term),
    };
    return config;
  }
}
