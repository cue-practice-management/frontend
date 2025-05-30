import { ROUTES } from '@/core/constants/routes.constants';
import { ToastService } from '@/core/services/toast.service';
import { CompanyDetail } from '@/features/company/company.models';
import { CompanyService } from '@/features/company/services/company.service';
import { RetrieveData } from '@/shared/abstracts/retrieve-data';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { COMPANY_ID_PARAM } from '../../admin.constants';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from "@atoms/spinner/spinner.component";
import { AdminSectionWrapperComponent } from "../../components/admin-section-wrapper/admin-section-wrapper.component";
import { CompanyDetailInfoComponent } from "../../../company/components/company-detail-info/company-detail-info.component";
import { TabsComponent } from "@organisms/tabs/tabs.component";
import { TabComponent } from "@molecules/tab/tab.component";
import { CompanyDetailContractsComponent } from "../../../company/components/company-detail-contracts/company-detail-contracts.component";

@Component({
  selector: 'app-admin-company-detail-page',
  standalone: true,
  imports: [CommonModule, SpinnerComponent, AdminSectionWrapperComponent, CompanyDetailInfoComponent, TabsComponent, TabComponent, CompanyDetailContractsComponent],
  templateUrl: './admin-company-detail-page.component.html',
  styleUrl: './admin-company-detail-page.component.scss'
})
export class AdminCompanyDetailPageComponent extends RetrieveData<CompanyDetail> implements OnInit {
  companyId!: string;
  company: CompanyDetail | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly companyService: CompanyService,
    private readonly router: Router,
    toastService: ToastService
  ) {
    super(toastService);
  }

  ngOnInit(): void {
    const companyId = this.route.snapshot.paramMap.get(COMPANY_ID_PARAM);

    if (!companyId) {
      this.router.navigate([ROUTES.ADMIN.COMPANIES]);
      return;
    }
    this.companyId = companyId;
    this.loadData();
  }

  protected override fetchData(): Observable<CompanyDetail> {
    return this.companyService.getCompanyById(this.companyId);
  }

  protected override onDataLoaded(data: CompanyDetail): void {
    this.company = data;
  }

  protected override onError(error: HttpErrorResponse): void {
    this.router.navigate([ROUTES.ADMIN.COMPANIES]);
  }

}
