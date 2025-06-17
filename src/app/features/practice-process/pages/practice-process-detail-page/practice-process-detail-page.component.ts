import { Component, OnInit } from '@angular/core';
import { PracticeProcessService } from '../../services/practice-process.service';
import { ToastService } from '@/core/services/toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PracticeProcess, PracticeProcessDetail } from '../../practice-process.models';
import { RetrieveData } from '@/shared/abstracts/retrieve-data';
import { ROUTES } from '@/core/constants/routes.constants';
import { Observable } from 'rxjs';
import { CurrentUserService } from '@/core/services/current-user.service';
import { PracticeProcessDetailPermissions } from './practice-process-detail-page.models';
import { getPracticeProcessDetailPermissions } from './practice-process-detail-page.utils';
import { PracticeProcessDetailHeaderComponent } from "../../components/practice-process-detail/practice-process-detail-header/practice-process-detail-header.component";
import { User } from '@/core/models/user.model';
import { CommonModule } from '@angular/common';
import { SectionWrapperComponent } from "@atoms/section-wrapper/section-wrapper.component";
import { UserRole } from '@/core/enums/user-role.enum';
import { SpinnerComponent } from "@atoms/spinner/spinner.component";
import { PracticeProcessDetailDeliverablesComponent } from "../../components/practice-process-detail/practice-process-detail-deliverables/practice-process-detail-deliverables.component";
import { PracticeProcessDetailFormatsComponent } from "../../components/practice-process-detail/practice-process-detail-formats/practice-process-detail-formats.component";

@Component({
  selector: 'app-practice-process-detail-page',
  standalone: true,
  imports: [PracticeProcessDetailHeaderComponent, CommonModule, SectionWrapperComponent, SpinnerComponent, PracticeProcessDetailDeliverablesComponent, PracticeProcessDetailFormatsComponent],
  templateUrl: './practice-process-detail-page.component.html',
  styleUrl: './practice-process-detail-page.component.scss'
})
export class PracticeProcessDetailPageComponent extends RetrieveData<PracticeProcessDetail> implements OnInit {
  practiceProcessId!: string;
  practiceProcess: PracticeProcessDetail | null = null;
  permissions!: PracticeProcessDetailPermissions;
  user: User | null = null;

  constructor(
    private readonly practiceProcessService: PracticeProcessService,
    private readonly currentUserService: CurrentUserService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    toastService: ToastService,
  ) {
    super(toastService);
  }
  ngOnInit(): void {
    const practiceProcessId = this.route.snapshot.paramMap.get('id');
    this.user = this.currentUserService.currentUserValue;

    if (!practiceProcessId || !this.user) {
      this.router.navigate([ROUTES.HOME]);
      return;
    }

    this.practiceProcessId = practiceProcessId;
    this.permissions = getPracticeProcessDetailPermissions(this.user.role);
    this.loadData();
  }

  protected override fetchData(): Observable<PracticeProcessDetail> {
    return this.practiceProcessService.getPracticeProcessById(this.practiceProcessId);
  }

  protected override onDataLoaded(data: PracticeProcessDetail): void {
    this.practiceProcess = data;
  }

  protected override onError(): void {
    this.router.navigate([ROUTES.HOME]);
  }

  onDeliverableSubmitted(): void {
    this.loadData();
  }

  get isStudent(): boolean {
    return this.user?.role === UserRole.STUDENT;
  }

  get isProfessor(): boolean {
    return this.user?.role === UserRole.PROFESSOR;
  }
}
