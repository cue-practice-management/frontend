import { DynamicFormComponent } from '@/shared/components/organisms/dynamic-form/dynamic-form.component';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Country, CreateCountryRequest, UpdateCountryRequest } from '../../country.models';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { CountryService } from '../../services/country.service';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { Validators } from '@angular/forms';
import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-form',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './country-form.component.html',
  styleUrl: './country-form.component.scss'
})
export class CountryFormComponent extends FormSubmitComponent<CreateCountryRequest | UpdateCountryRequest, Country> implements OnInit, OnChanges {

  @Input() country: Country | null = null;
  countryFormConfig!: DynacmicFormConfig;

  constructor(private countryService: CountryService, private modalRef: ModalRef) {
    super();
  }

  ngOnInit(): void {
    this.updateFormConfig();
  }

  ngOnChanges(): void {
    this.updateFormConfig();
  }

  private updateFormConfig(): void {
    this.countryFormConfig = {
      title: this.country ? 'Editar país' : 'Crear país',
      buttonLabel: this.country ? 'Guardar cambios' : 'Crear país',
      sections: [
        {
          fields: [
            {
              key: 'name',
              label: 'Nombre',
              value: this.country?.name,
              type: FormFieldType.TEXT,
              placeholder: 'Nombre del país',
              validators: [Validators.required]
            },
          ]
        }
      ]
    };
  }

  override submitData(data: CreateCountryRequest | UpdateCountryRequest): Observable<Country> {
    if (this.country) {
      return this.countryService.updateCountry(this.country._id, data);
    } else {
      return this.countryService.createCountry(data as CreateCountryRequest);
    }
  }

  override onSuccess = (country: Country): void => {
    this.modalRef.close(country);
  };

  onFormSubmit(formValue: CreateCountryRequest | UpdateCountryRequest): void {
    this.submitForm(formValue);
  }

}
