import { DataTable } from '@/shared/abstracts/data-table.abstract';
import { Component, Input, OnInit } from '@angular/core';
import { Country, CountryFilter } from '../../country.models';
import { CountryService } from '../../services/country.service';
import { ModalService } from '@/core/services/modal.service';
import { ColumnConfig, TableRowAction } from '@/shared/components/organisms/data-table/data-table.models';
import { CountryFormComponent } from '../country-form/country-form.component';
import { Observable } from 'rxjs';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { DataTableComponent } from "@organisms/data-table/data-table.component";

@Component({
  selector: 'app-country-table',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.scss'
})
export class CountryTableComponent extends DataTable<Country, CountryFilter> implements OnInit {
  override entityName = 'País';
  override entityKeyName = 'country';
  override formComponent = CountryFormComponent;
  @Input() override allowedActions = [];

  readonly columns: ColumnConfig<Country>[] = [
    { label: 'Nombre', field: 'name', sortable: true },
  ];

  constructor(private countryService: CountryService, modalService: ModalService) {
    super(modalService);
  }

  ngOnInit(): void {
    this.loadPageData(this.filter);
  }

  override getAll(filter: CountryFilter): Observable<PaginatedResult<Country>> {
    return this.countryService.getCountries(filter);
  }

  override delete(id: string): Observable<void> {
    return this.countryService.deleteCountry(id);
  }

  get actions(): TableRowAction<Country>[] {
    return this.getTableActions();
  }
}
