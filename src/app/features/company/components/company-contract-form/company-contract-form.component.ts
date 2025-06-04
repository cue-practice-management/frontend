import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { Component, Input } from '@angular/core';
import { CompanyContract, CreateCompanyContractRequest, UpdateCompanyContractRequest } from '../../company.models';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { CompanyService } from '../../services/company.service';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { Validators } from '@angular/forms';
import { COMPANY_CONTRACT_STATUS_SELECT_OPTIONS, COMPANY_CONTRACT_TYPE_SELECT_OPTIONS } from '@/core/constants/select-options.constants';
import { Observable } from 'rxjs';
import { DynamicFormComponent } from "@organisms/dynamic-form/dynamic-form.component";
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-company-contract-form',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './company-contract-form.component.html',
  styleUrl: './company-contract-form.component.scss'
})
export class CompanyContractFormComponent extends FormSubmitComponent<CreateCompanyContractRequest | UpdateCompanyContractRequest, CompanyContract> {
  @Input() contract!: CompanyContract | null;
  @Input() companyId!: string;
  companyContractFormConfig!: DynacmicFormConfig;

  constructor(private companyService: CompanyService, private modalRef: ModalRef) {
    super();
  }

  ngOnInit(): void {
    this.updateFormConfig();
  }

  ngOnChanges(): void {
    this.updateFormConfig();
  }

  private updateFormConfig(): void {
    this.companyContractFormConfig = {
      title: this.contract ? 'Editar contrato' : 'Crear contrato',
      buttonLabel: this.contract ? 'Guardar cambios' : 'Crear contrato',
      sections: [
        {
          fields: [
            {
              key: 'type',
              label: 'Tipo de contrato',
              value: this.contract?.type,
              type: FormFieldType.SELECT,
              selectOptions: COMPANY_CONTRACT_TYPE_SELECT_OPTIONS,
              placeholder: 'Seleccione un tipo',
              validators: [Validators.required]
            },
            {
              key: 'status',
              label: 'Estado del contrato',
              value: this.contract?.status,
              type: FormFieldType.SELECT,
              selectOptions: COMPANY_CONTRACT_STATUS_SELECT_OPTIONS,
              placeholder: 'Seleccione un estado',
              validators: [Validators.required],
            },
            {
              key: 'startDate',
              label: 'Fecha de inicio',
              value: this.contract?.startDate ? formatDate(this.contract.startDate, 'yyyy-MM-dd', 'en-US') : undefined,
              type: FormFieldType.DATE,
              validators: [Validators.required]
            },
            {
              key: 'endDate',
              label: 'Fecha de finalización',
              value: this.contract?.endDate ? formatDate(this.contract.endDate, 'yyyy-MM-dd', 'en-US') : undefined,
              type: FormFieldType.DATE,
              validators: [Validators.required]
            },
            {
              key: 'file',
              label: 'Archivo del contrato',
              type: FormFieldType.FILE,
              fileConfig: {
                accept: '/*'
              },
              validators: [Validators.required],
            }
          ]
        }
      ]
    };
  }

  override submitData(data: CreateCompanyContractRequest): Observable<CompanyContract> {
    if (this.contract) {
      return this.companyService.updateCompanyContract(this.contract._id, data);
    } else {
      return this.companyService.createCompanyContract(this.companyId, data);
    }
  }

  override onSuccess = (contract: CompanyContract): void => {
    this.modalRef.close(contract);
  };

  onFormSubmit(formValue: CreateCompanyContractRequest): void {
    this.submitForm(formValue);
  }
}
