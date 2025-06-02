import { DynamicFormComponent } from '@/shared/components/organisms/dynamic-form/dynamic-form.component';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CompanyMentor, CreateCompanyMentorRequest, UpdateCompanyMentorRequest } from '../../company-mentor.models';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { CompanyMentorService } from '../../services/company-mentor.service';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import { CompanyService } from '@/features/company/services/company.service';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { Validators } from '@angular/forms';
import { DOCUMENT_TYPE_SELECT_OPTIONS, GENDER_SELECT_OPTIONS } from '@/core/constants/select-options.constants';
import { colombianPhoneValidator } from '@/core/validators/colombian-phone.validator';
import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { TypeaheadConfig } from '@/shared/models/typeahead-item.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company-mentor-form',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './company-mentor-form.component.html',
  styleUrl: './company-mentor-form.component.scss'
})
export class CompanyMentorFormComponent extends FormSubmitComponent<CreateCompanyMentorRequest | UpdateCompanyMentorRequest, CompanyMentor> implements OnInit, OnChanges {

  @Input() companyMentor!: CompanyMentor | null;
  companyMentorFormConfig!: DynacmicFormConfig;

  constructor(
    private companyMentorService: CompanyMentorService,
    private companyService: CompanyService,
    private modalRef: ModalRef
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
    this.companyMentorFormConfig = {
      title: this.companyMentor ? 'Editar tutor empresarial' : 'Crear tutor empresarial',
      buttonLabel: this.companyMentor ? 'Guardar cambios' : 'Crear tutor empresarial',
      sections: [
        {
          title: 'Información del tutor',
          fields: [
            {
              key: 'firstName',
              label: 'Nombre',
              value: this.companyMentor?.firstName,
              type: FormFieldType.TEXT,
              placeholder: 'Nombre del tutor empresarial',
              validators: [Validators.required]
            },
            {
              key: 'lastName',
              label: 'Apellido',
              value: this.companyMentor?.lastName,
              type: FormFieldType.TEXT,
              placeholder: 'Apellido del tutor empresarial',
              validators: [Validators.required]
            },
            {
              key: 'email',
              label: 'Correo electrónico',
              value: this.companyMentor?.email,
              type: FormFieldType.TEXT,
              placeholder: 'Correo electrónico del tutor empresarial',
              validators: [Validators.required, Validators.email]
            },
            {
              key: 'typeOfDocument',
              label: 'Tipo de documento',
              value: this.companyMentor?.typeOfDocument,
              type: FormFieldType.SELECT,
              selectOptions: DOCUMENT_TYPE_SELECT_OPTIONS,
              placeholder: 'Selecciona un tipo de documento',
              validators: [Validators.required]
            },
            {
              key: 'documentNumber',
              label: 'Número de documento',
              value: this.companyMentor?.documentNumber,
              type: FormFieldType.TEXT,
              placeholder: 'Número de documento del tutor empresarial',
              validators: [Validators.required]
            },
            {
              key: 'phoneNumber',
              label: 'Número de teléfono',
              value: this.companyMentor?.phoneNumber,
              type: FormFieldType.TEXT,
              validators: [Validators.required, colombianPhoneValidator()],
              placeholder: 'Número de teléfono del tutor empresarial'
            },
            {
              key: 'gender',
              label: 'Género',
              value: this.companyMentor?.gender,
              type: FormFieldType.SELECT,
              placeholder: 'Selecciona un género',
              selectOptions: GENDER_SELECT_OPTIONS,
              validators: [Validators.required]
            },

          ]
        },
        {
          title: 'Información empresarial',
          fields: [
            {
              key: 'company',
              label: 'Empresa',
              value: this.companyMentor?.company._id,
              type: FormFieldType.TYPEAHEAD,
              placeholder: 'Busca una empresa...',
              typeaheadConfig: this.companyTypeaheadConfig,
              validators: [Validators.required]
            },
            {
              key: 'position',
              label: 'Cargo',
              value: this.companyMentor?.position,
              type: FormFieldType.TEXT,
              placeholder: 'Cargo del tutor empresarial',
              validators: [Validators.required]
            }
          ]
        }
      ]
    };

  }
    protected override submitData(data: UpdateCompanyMentorRequest | CreateCompanyMentorRequest): Observable<CompanyMentor> {
      if (this.companyMentor) {
        return this.companyMentorService.updateCompanyMentor(this.companyMentor._id, data);
      } else {
        return this.companyMentorService.createCompanyMentor(data as CreateCompanyMentorRequest);
      }
    }

  override onSuccess = (companyMentor: CompanyMentor): void => {
    this.modalRef.close(companyMentor);
  };

  onFormSubmit(formValue: CreateCompanyMentorRequest): void {
    this.submitForm(formValue);
  }

  get companyTypeaheadConfig(): TypeaheadConfig {
    const config: TypeaheadConfig = {
      placeholder: 'Busca un programa académico...',
      retrieveOptions: (term: string) => this.companyService.getTypeaheadCompanies(term),
    }
    if (this.companyMentor) {
      config.retrieveOptionsFromExistingValue = () => this.companyService.getTypeaheadCompanies(this.companyMentor!.company.name);
    }

    return config;
  }

}
