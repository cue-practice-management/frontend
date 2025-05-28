import { DataTable } from '@/shared/abstracts/data-table.abstract';
import { Component, Input, OnInit } from '@angular/core';
import { City, CityFilter } from '../../city.models';
import { ColumnConfig, TableRowAction } from '@/shared/components/organisms/data-table/data-table.models';
import { Observable } from 'rxjs';
import { CityService } from '../../services/city.service';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { ModalService } from '@/core/services/modal.service';
import { CityFormComponent } from '../city-form/city-form.component';
import { DataTableComponent } from "@organisms/data-table/data-table.component";

@Component({
  selector: 'app-city-table',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './city-table.component.html',
  styleUrl: './city-table.component.scss'
})
export class CityTableComponent extends DataTable<City, CityFilter> implements OnInit {
  override entityName = 'Ciudad';
  override entityKeyName = 'city';
  override formComponent = CityFormComponent;
  @Input() override allowedActions = [];

  readonly columns: ColumnConfig<City>[] = [
    { label: 'Nombre', field: 'name', sortable: true },
    { label: 'País', field: 'country', cell: (row) => row.country.name, sortable: true },
  ];

  constructor(private cityService: CityService, modalService: ModalService) {
    super(modalService);
  }

  ngOnInit(): void {
    this.loadPageData(this.filter);
  }

  override getAll(filter: CityFilter): Observable<PaginatedResult<City>> {
    return this.cityService.getCities(filter);
  }

  override delete(id: string): Observable<void> {
    return this.cityService.deleteCity(id);
  }

  get actions(): TableRowAction<City>[] {
    return this.getTableActions();
  }
}
