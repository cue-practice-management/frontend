import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { Company } from '../../company.models';
import { Observable } from 'rxjs';
import { Camera, Image, LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-logo-uploader',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './company-logo-uploader.component.html',
  styleUrl: './company-logo-uploader.component.scss'
})
export class CompanyLogoUploaderComponent extends FormSubmitComponent<FormData, Company> {
  @Input() companyId!: string;
  @Input() logoUrl?: string;
  @Output() logoUpdated = new EventEmitter<string>();

  hover = false;

  constructor(private companyService: CompanyService) {
    super();
  }

  protected override submitData(data: FormData): Observable<Company> {
    return this.companyService.updateCompanyLogo(this.companyId, data);
  }

  override onSuccess(res: Company): void {
    this.logoUpdated.emit(res.logoUrl);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    this.submitForm(formData);
  }

  Image = Image;
  Camera = Camera
}