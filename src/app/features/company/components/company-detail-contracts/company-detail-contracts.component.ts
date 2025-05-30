import { Component, Input, ViewChild } from '@angular/core';
import { CompanyContractsTableComponent } from "../company-contracts-table/company-contracts-table.component";
import { ButtonComponent } from "@atoms/button/button.component";
import { ModalService } from '@/core/services/modal.service';
import { CompanyContractFormComponent } from '../company-contract-form/company-contract-form.component';
import { TableAction } from '@/shared/models/table-actions.enum';

@Component({
  selector: 'app-company-detail-contracts',
  standalone: true,
  imports: [CompanyContractsTableComponent, ButtonComponent],
  templateUrl: './company-detail-contracts.component.html',
  styleUrl: './company-detail-contracts.component.scss'
})
export class CompanyDetailContractsComponent {
  @Input() companyId!: string;

  @ViewChild(CompanyContractsTableComponent)
  contractsTable!: CompanyContractsTableComponent;

  allowedActions = [TableAction.EDIT, TableAction.DELETE];

  constructor(
    private readonly modalService: ModalService
  ) { }

  onCreateContract() {
    this.modalService.open(CompanyContractFormComponent, {
      data: {
        companyId: this.companyId,
      }
    })
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.contractsTable.reloadPageData();
        }
      });
  }
}
