import { Component } from '@angular/core';
import { AdminEntityPageConfig } from '../../admin.models';
import { Country, CountryFilter } from '@/features/country/country.models';
import { CountryTableComponent } from '@/features/country/components/country-table/country-table.component';
import { CountryFormComponent } from '@/features/country/components/country-form/country-form.component';
import { TableAction } from '@/shared/models/table-actions.enum';
import { AdminEntityPageComponent } from "../../components/admin-entity-page/admin-entity-page.component";

@Component({
  selector: 'app-admin-country-page',
  standalone: true,
  imports: [AdminEntityPageComponent],
  templateUrl: './admin-country-page.component.html',
  styleUrl: './admin-country-page.component.scss'
})
export class AdminCountryPageComponent {
  countryPageConfig: AdminEntityPageConfig<Country, CountryFilter> = {
    title: 'Países',
    description: 'Gestiona los países disponibles en la plataforma.',
    createButtonLabel: 'Crear País',
    tableComponent: CountryTableComponent,
    formComponent: CountryFormComponent,
    allowedActions: [TableAction.EDIT, TableAction.DELETE],
    modalWidth: '800px',
  }
}
