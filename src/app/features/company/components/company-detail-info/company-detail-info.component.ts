import { Component, Input } from '@angular/core';
import { CompanyDetail } from '../../company.models';
import { CommonModule } from '@angular/common';
import { CompanyLogoUploaderComponent } from "../company-logo-uploader/company-logo-uploader.component";
import { CompanyContractsTableComponent } from "../company-contracts-table/company-contracts-table.component";

@Component({
  selector: 'app-company-detail-info',
  standalone: true,
  imports: [CommonModule, CompanyLogoUploaderComponent, CompanyContractsTableComponent],
  templateUrl: './company-detail-info.component.html',
  styleUrl: './company-detail-info.component.scss'
})
export class CompanyDetailInfoComponent {
  @Input() company!: CompanyDetail;

  get companyAssociatedAcademicPrograms(): string {
    const programsNames = this.company.associatedAcademicPrograms?.map(program => program.name);

    if (!programsNames || programsNames.length === 0) {
      return 'No hay programas asociados'; 
    }

    return programsNames.join(', ');

  }
}
