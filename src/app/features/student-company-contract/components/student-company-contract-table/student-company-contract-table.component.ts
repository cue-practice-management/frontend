import { DataTable } from '@/shared/abstracts/data-table.abstract';
import { Component, Input, OnInit } from '@angular/core';
import { StudentCompanyContract, StudentCompanyContractFilter } from '../../student-company-contract.models';
import { StudentCompanyContractFormComponent } from '../student-company-contract-form/student-company-contract-form.component';
import { ColumnConfig, TableRowAction } from '@/shared/components/organisms/data-table/data-table.models';
import { formatDate } from '@angular/common';
import { StudentCompanyContractService } from '../../services/student-company-contract.service';
import { ModalService } from '@/core/services/modal.service';
import { Observable } from 'rxjs';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { DataTableComponent } from "@organisms/data-table/data-table.component";

@Component({
  selector: 'app-student-company-contract-table',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './student-company-contract-table.component.html',
  styleUrl: './student-company-contract-table.component.scss'
})
export class StudentCompanyContractTableComponent extends DataTable<StudentCompanyContract, StudentCompanyContractFilter> implements OnInit {
  @Input() override allowedActions = [];
  override entityName = 'Contrato Estudiante - Empresa';
  override entityKeyName = 'studentCompanyContract';
  override formComponent = StudentCompanyContractFormComponent;

  readonly columns: ColumnConfig<StudentCompanyContract>[] = [
    { label: 'Estudiante', field: 'student', cell: c => `${c.student.firstName} ${c.student.lastName}`, sortable: true },
    { label: 'Empresa', field: 'company', cell: c => c.company.corporateName, sortable: true },
    { label: 'Fecha Inicio', field: 'startDate', cell: c => c.startDate ? formatDate(c.startDate, 'dd/MM/yyyy', 'en-US') : '', },
    { label: 'Fecha Fin', field: 'endDate', sortable: true, cell: c => c.endDate ? formatDate(c.endDate, 'dd/MM/yyyy', 'en-US') : '' },
    { label: 'Estado', field: 'status', cell: c => c.status, sortable: true },
    { label: 'Documento', field: 'contractUrl', isFile: true }
  ];

  constructor(private readonly studentCompanyContractService: StudentCompanyContractService, modalService: ModalService) {
    super(modalService);
  }

  ngOnInit(): void {
    this.loadPageData(this.filter);
  }

  override getAll(filter: StudentCompanyContractFilter): Observable<PaginatedResult<StudentCompanyContract>> {
    return this.studentCompanyContractService.getStudentCompanyContracts(filter);
  }

  override delete(contractId: string): Observable<void> {
    return this.studentCompanyContractService.deleteStudentCompanyContract(contractId);
  }

  get actions(): TableRowAction<StudentCompanyContract>[] {
    return this.getTableActions();
  }

}
