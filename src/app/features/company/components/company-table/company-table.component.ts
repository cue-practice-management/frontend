import { DataTable } from '@/shared/abstracts/data-table.abstract';
import { Component, Input, OnInit } from '@angular/core';
import { DataTableComponent } from "@organisms/data-table/data-table.component";
import { Company, CompanyFilter } from '../../company.models';
import { CompanyService } from '../../services/company.service';
import { ModalService } from '@/core/services/modal.service';
import { CompanyFormComponent } from '../company-form/company-form.component';
import { ColumnConfig } from '@/shared/components/organisms/data-table/data-table.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-table',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './company-table.component.html',
  styleUrl: './company-table.component.scss'
})
export class CompanyTableComponent extends DataTable<Company, CompanyFilter> implements OnInit {
  @Input() override allowedActions = [];
  override entityName = 'Empresa';
  override entityKeyName = 'company';
  override formComponent = CompanyFormComponent;

  readonly columns: ColumnConfig<Company>[] = [
    { label: 'Nombre', field: 'name', sortable: true },
    { label: 'Razón Social', field: 'corporateName', sortable: true },
    { label: 'NIT', field: 'nit', sortable: true },
    { label: 'Teléfono', field: 'phone', sortable: false },
    { label: 'Sitio Web', field: 'websiteUrl', sortable: false },
    { label: 'Programas Asociados', cell: (c) => c.associatedAcademicPrograms.map(p => p.name).join(', ') }
  ];

  constructor(
    private readonly companyService: CompanyService,
    private readonly router: Router,
    modalService: ModalService
  ) {
    super(modalService);
  }

  ngOnInit(): void {
    this.loadPageData(this.filter);
  }

  override getAll(filter: CompanyFilter) {
    return this.companyService.getCompanies(filter);
  }

  override delete(id: string) {
    return this.companyService.deleteCompany(id);
  }

  get actions() {
    return this.getTableActions();
  }

  onRowClick(company: Company): void {
    this.router.navigate(['/admin/companies', company._id]);
  }
}
