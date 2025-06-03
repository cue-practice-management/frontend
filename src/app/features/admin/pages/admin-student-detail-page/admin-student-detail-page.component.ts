import { Component, OnInit } from '@angular/core';
import { SpinnerComponent } from "@atoms/spinner/spinner.component";
import { TabComponent } from "@molecules/tab/tab.component";
import { AdminSectionWrapperComponent } from '../../components/admin-section-wrapper/admin-section-wrapper.component';
import { TabsComponent } from "@organisms/tabs/tabs.component";
import { RetrieveData } from '@/shared/abstracts/retrieve-data';
import { Student } from '@/features/student/student.model';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '@/features/student/services/student.service';
import { ToastService } from '@/core/services/toast.service';
import { STUDENT_ID_PARAM } from '../../admin.constants';
import { ROUTES } from '@/core/constants/routes.constants';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StudentCompanyLinkingProcessTableComponent } from "../../../student-company-linking-process/components/student-company-linking-process-table/student-company-linking-process-table.component";
import { StudentProfileComponent } from "../../../student/components/student-profile/student-profile.component";

@Component({
  selector: 'app-admin-student-detail-page',
  standalone: true,
  imports: [AdminSectionWrapperComponent, SpinnerComponent, TabComponent, TabsComponent, CommonModule, StudentCompanyLinkingProcessTableComponent, StudentProfileComponent],
  templateUrl: './admin-student-detail-page.component.html',
  styleUrl: './admin-student-detail-page.component.scss'
})
export class AdminStudentDetailPageComponent extends RetrieveData<Student> implements OnInit {
  studentId!: string;
  student: Student | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly studentService: StudentService,
    private readonly router: Router,
    toastService: ToastService
  ) {
    super(toastService);
  }

  ngOnInit(): void {
    const studentId = this.route.snapshot.paramMap.get(STUDENT_ID_PARAM);

    if (!studentId) {
      this.router.navigate([ROUTES.ADMIN.STUDENTS]);
      return;
    }
    this.studentId = studentId;
    this.loadData();
  }

  protected override fetchData(): Observable<Student> {
    return this.studentService.getStudentById(this.studentId);
  }

  protected override onDataLoaded(data: Student): void {
    this.student = data;
  }

  protected override onError(error: HttpErrorResponse): void {
    this.router.navigate([ROUTES.ADMIN.STUDENTS]);
  }

}
