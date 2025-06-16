import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { RetrieveData } from '@/shared/abstracts/retrieve-data';
import { Student } from '../../student.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastService } from '@/core/services/toast.service';
import { SectionWrapperComponent } from "@atoms/section-wrapper/section-wrapper.component";
import { StudentHomeHeaderComponent } from "../../components/student-home/student-home-header/student-home-header.component";
import { SpinnerComponent } from "@atoms/spinner/spinner.component";
import { CommonModule } from '@angular/common';
import { StudentHomeCurrentCompanyComponent } from "../../components/student-home/student-home-current-company/student-home-current-company.component";
import { StudentHomeActivePracticeProcessComponent } from "../../components/student-home/student-home-active-practice-process/student-home-active-practice-process.component";

@Component({
  selector: 'app-student-home-page',
  standalone: true,
  imports: [SectionWrapperComponent, StudentHomeHeaderComponent, SpinnerComponent, CommonModule, StudentHomeCurrentCompanyComponent, StudentHomeActivePracticeProcessComponent],
  templateUrl: './student-home-page.component.html',
  styleUrl: './student-home-page.component.scss'
})
export class StudentHomePageComponent extends RetrieveData<Student> implements OnInit {
  student?: Student;

  constructor(
    private readonly studentService: StudentService,
    toastService: ToastService
  ) {
    super(toastService);
  }

  ngOnInit(): void {
    this.loadData();
  }

  protected override fetchData(): Observable<Student> {
    return this.studentService.getCurrentStudent();
  }

  protected override onDataLoaded(data: Student): void {
    this.student = data;
  }

  protected override onError(error: HttpErrorResponse): void {
    console.error('Failed to load student data:', error);
  }

}
