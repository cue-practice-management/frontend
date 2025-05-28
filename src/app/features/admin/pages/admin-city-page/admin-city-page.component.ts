import { Component } from '@angular/core';
import { AdminEntityPageConfig } from '../../admin.models';
import { City, CityFilter } from '@/features/city/city.models';
import { CityTableComponent } from '@/features/city/components/city-table/city-table.component';
import { CityFormComponent } from '@/features/city/components/city-form/city-form.component';
import { TableAction } from '@/shared/models/table-actions.enum';
import { AdminEntityPageComponent } from "../../components/admin-entity-page/admin-entity-page.component";

@Component({
  selector: 'app-admin-city-page',
  standalone: true,
  imports: [AdminEntityPageComponent],
  templateUrl: './admin-city-page.component.html',
  styleUrl: './admin-city-page.component.scss'
})
export class AdminCityPageComponent {
  cityPageConfig: AdminEntityPageConfig<City, CityFilter> = {
    title: 'Ciudades',
    description: 'Gestiona las ciudades de la plataforma.',
    createButtonLabel: 'Crear Ciudad',
    tableComponent: CityTableComponent,
    formComponent: CityFormComponent,
    allowedActions: [TableAction.EDIT, TableAction.DELETE],
    modalWidth: '800px',
  }
}
