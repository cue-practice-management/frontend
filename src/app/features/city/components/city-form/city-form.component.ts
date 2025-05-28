import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { City, CreateCityRequest, UpdateCityRequest } from '../../city.models';
import { Observable } from 'rxjs';
import { Validators } from '@angular/forms';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { CityService } from '../../services/city.service';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { CountryService } from '@/features/country/services/country.service';
import { TypeaheadConfig } from '@/shared/models/typeahead-item.model';
import { DynamicFormComponent } from '@/shared/components/organisms/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-city-form',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './city-form.component.html',
  styleUrl: './city-form.component.scss'
})
export class CityFormComponent extends FormSubmitComponent<CreateCityRequest | UpdateCityRequest, City> implements OnInit, OnChanges {
  @Input() city: City | null = null;
  cityFormConfig!: DynacmicFormConfig;

  constructor(
    private cityService: CityService,
    private countryService: CountryService,
    private modalRef: ModalRef) {
    super();
  }

  ngOnInit(): void {
    this.updateFormConfig();
  }

  ngOnChanges(): void {
    this.updateFormConfig();
  }

  private updateFormConfig(): void {
    this.cityFormConfig = {
      title: this.city ? 'Editar país' : 'Crear país',
      buttonLabel: this.city ? 'Guardar cambios' : 'Crear país',
      sections: [
        {
          fields: [
            {
              key: 'name',
              label: 'Nombre',
              value: this.city?.name,
              type: FormFieldType.TEXT,
              placeholder: 'Nombre de la ciudad',
              validators: [Validators.required]
            },
            {
              key: 'country',
              label: 'País',
              value: this.city?.country._id,
              type: FormFieldType.TYPEAHEAD,
              placeholder: 'Busca un país...',
              typeaheadConfig: this.countryTypeaheadConfig,
              validators: [Validators.required]
            },
          ]
        }
      ]
    };
  }

  onFormSubmit(formValue: CreateCityRequest | UpdateCityRequest): void {
    this.submitForm(formValue);
  }

  override submitData(data: CreateCityRequest | UpdateCityRequest): Observable<City> {
    if (this.city) {
      return this.cityService.updateCity(this.city._id, data);
    } else {
      return this.cityService.createCity(data as CreateCityRequest);
    }
  }

  override onSuccess = (city: City): void => {
    this.modalRef.close(city);
  };

  get countryTypeaheadConfig(): TypeaheadConfig {
    const config: TypeaheadConfig = {
      placeholder: 'Busca un país...',
      retrieveOptions: (term: string) => this.countryService.getTypeaheadCountries(term),
    }
    if (this.city) {
      config.retrieveOptionsFromExistingValue = () => this.countryService.getTypeaheadCountries(this.city!.country.name);
    }
    return config;
  }




}
