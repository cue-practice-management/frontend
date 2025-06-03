import { TypeaheadConfig, TypeaheadItem } from '@/shared/models/typeahead-item.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CompanyService } from '../../services/company.service';
import { InputTypeaheadComponent } from "@atoms/input-typeahead/input-typeahead.component";

@Component({
  selector: 'app-company-typeahead',
  standalone: true,
  imports: [InputTypeaheadComponent],
  templateUrl: './company-typeahead.component.html',
  styleUrl: './company-typeahead.component.scss'
})
export class CompanyTypeaheadComponent {
  @Input() control!: FormControl;
  @Output() selectedCompanyItem: EventEmitter<TypeaheadItem> = new EventEmitter<TypeaheadItem>();

  constructor(
    private companyService: CompanyService
  ) { }

  config: TypeaheadConfig = {
    placeholder: 'Empresa',
    retrieveOptions: (term: string) => this.companyService.getTypeaheadCompanies(term),
  }

  onSelectedOption(option: TypeaheadItem): void {
    this.selectedCompanyItem.emit(option);
  }
}
