import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DynamicFormComponent } from "@organisms/dynamic-form/dynamic-form.component";
import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { Company, CreateCompanyRequest, UpdateCompanyRequest } from '../../company.models';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { CompanyService } from '../../services/company.service';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import { Validators } from '@angular/forms';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company-form',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './company-form.component.html',
  styleUrl: './company-form.component.scss'
})
export class CompanyFormComponent extends FormSubmitComponent<CreateCompanyRequest | UpdateCompanyRequest, Company> implements OnInit, OnChanges {
  @Input() company: Company | null = null;
  companyFormConfig!: DynacmicFormConfig;

  constructor(
    private readonly companyService: CompanyService,
    private readonly modalRef: ModalRef
  ) {
    super();
  }

  ngOnInit(): void {
    this.updateFormConfig();
  }

  ngOnChanges(): void {
    this.updateFormConfig();
  }

  private updateFormConfig(): void {
    this.companyFormConfig = {
      title: this.company ? 'Editar empresa' : 'Crear empresa',
      buttonLabel: this.company ? 'Guardar cambios' : 'Crear empresa',
      sections: [
        {
          title: 'Información de la empresa',
          fields: [
            {
              key: 'name',
              label: 'Nombre',
              value: this.company?.name,
              type: FormFieldType.TEXT,
              placeholder: 'Nombre de la empresa',
              validators: [Validators.required]
            },
            {
              key: 'corporateName',
              label: 'Razón social',
              value: this.company?.corporateName,
              type: FormFieldType.TEXT,
              placeholder: 'Razón social de la empresa',
              validators: [Validators.required]
            },
            {
              key: 'nit',
              label: 'NIT',
              value: this.company?.nit,
              type: FormFieldType.TEXT,
              placeholder: 'NIT de la empresa',
              validators: [Validators.required]
            },
            {
              key: 'phone',
              label: 'Teléfono',
              value: this.company?.phone,
              type: FormFieldType.TEXT,
              placeholder: 'Teléfono de la empresa',
              validators: [Validators.required]
            },
            {
              key: 'websiteUrl',
              label: 'Sitio web',
              value: this.company?.websiteUrl,
              type: FormFieldType.TEXT,
              placeholder: 'Sitio web de la empresa',
              validators: [Validators.required]
            },
          ]
        }
      ]
    };
  }

  onFormSubmit(data: CreateCompanyRequest | UpdateCompanyRequest): void {
    this.submitForm(data);
  }

  protected override submitData(data: CreateCompanyRequest | UpdateCompanyRequest): Observable<Company> {
    if (this.company) {
      return this.companyService.updateCompany(this.company._id, data);
    } else {
      return this.companyService.createCompany(data as CreateCompanyRequest);
    }
  }

  override onSuccess = (company: Company): void => {
    this.modalRef.close(company);
  };

}
