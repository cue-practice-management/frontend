import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DynamicFormComponent } from "@organisms/dynamic-form/dynamic-form.component";
import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { Company, CreateCompanyRequest, UpdateCompanyRequest } from '../../company.models';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { CompanyService } from '../../services/company.service';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { Observable } from 'rxjs';
import { CityService } from '@/features/city/services/city.service';
import { CountryService } from '@/features/country/services/country.service';
import { AcademicProgramService } from '@/features/academic-program/services/academic-program.service';
import { TypeaheadConfig } from '@/shared/models/typeahead-item.model';
import { COMPANY_SIZE_SELECT_OPTIONS } from '@/core/constants/select-options.constants';

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
    private readonly countryService: CountryService,
    private readonly cityService: CityService,
    private readonly acdemicProgramService: AcademicProgramService,
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
              key: 'address',
              label: 'Dirección',
              value: this.company?.address,
              type: FormFieldType.TEXT,
              placeholder: 'Dirección de la empresa',
              validators: [Validators.required]
            },
            {
              key: 'size',
              label: 'Tamaño de la empresa',
              value: this.company?.size,
              type: FormFieldType.SELECT,
              selectOptions: COMPANY_SIZE_SELECT_OPTIONS,
              placeholder: 'Selecciona el tamaño de la empresa',
              validators: [Validators.required]
            },
            {
              key: 'country',
              label: 'País',
              value: this.company?.country?._id,
              type: FormFieldType.TYPEAHEAD,
              typeaheadConfig: this.countryTypeaheadConfig,
              validators: [Validators.required]
            },
            {
              key: 'city',
              label: 'Ciudad',
              value: this.company?.city?._id,
              type: FormFieldType.TYPEAHEAD,
              typeaheadConfig: this.cityTypeaheadConfig,
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
            {
              key: 'associatedAcademicPrograms',
              label: 'Programas académicos asociados',
              value: this.company?.associatedAcademicPrograms?.map(p => p._id),
              type: FormFieldType.MULTISELECT,
              multiSelectConfig: {
                placeholder: 'Selecciona programas',
                retrieveOptions: (term: string) => this.acdemicProgramService.getTypeaheadAcademicPrograms(term),
              },
              validators: [Validators.required]
            }
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

  get countryTypeaheadConfig(): TypeaheadConfig {
    const config: TypeaheadConfig = {
      placeholder: 'Busca un país...',
      retrieveOptions: (term: string) => this.countryService.getTypeaheadCountries(term),
    };

    if (this.company?.country?.name) {
      config.retrieveOptionsFromExistingValue = () =>
        this.countryService.getTypeaheadCountries(this.company!.country.name);
    }

    return config;
  }

  get cityTypeaheadConfig(): TypeaheadConfig {
    const countryId = this.company?.country?._id;

    const config: TypeaheadConfig = {
      placeholder: 'Busca una ciudad...',
      retrieveOptions: (term: string) => this.cityService.getTypeaheadCities(term, countryId),
    };

    if (this.company?.city?.name) {
      config.retrieveOptionsFromExistingValue = () =>
        this.cityService.getTypeaheadCities(this.company!.city.name, countryId);
    }

    return config;
  }

  onDynamicFieldChanged(event: { key: string, value: any, form: FormGroup }): void {
    if (event.key === 'country') {
      const cityControl = event.form.get('city') as FormControl;
      cityControl.setValue(null);

      const newCityTypeaheadConfig: TypeaheadConfig = {
        placeholder: 'Busca una ciudad...',
        retrieveOptions: (term: string) => this.cityService.getTypeaheadCities(term, event.value),
      };

      const cityField = this.companyFormConfig.sections[0].fields.find(f => f.key === 'city');
      if (cityField) {
        cityField.typeaheadConfig = newCityTypeaheadConfig;
      }
    }
  }

}
