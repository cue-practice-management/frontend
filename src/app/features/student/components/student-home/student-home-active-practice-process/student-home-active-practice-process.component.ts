import { ToastService } from '@/core/services/toast.service';
import { PracticeProcess } from '@/features/practice-process/practice-process.models';
import { PracticeProcessService } from '@/features/practice-process/services/practice-process.service';
import { Student } from '@/features/student/student.model';
import { RetrieveData } from '@/shared/abstracts/retrieve-data';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AvatarComponent } from "@atoms/avatar/avatar.component";
import { CommonModule } from '@angular/common';
import { Briefcase, Calendar, Eye, LucideAngularModule, User } from 'lucide-angular';
import { ButtonComponent } from "@atoms/button/button.component";
import { SpinnerComponent } from "@atoms/spinner/spinner.component";
import { Router } from '@angular/router';
import { StatusBadgeComponent } from "@atoms/status-badge/status-badge.component";

@Component({
  selector: 'app-student-home-active-practice-process',
  standalone: true,
  imports: [AvatarComponent, CommonModule, LucideAngularModule, ButtonComponent, SpinnerComponent, StatusBadgeComponent],
  templateUrl: './student-home-active-practice-process.component.html',
  styleUrl: './student-home-active-practice-process.component.scss'
})
export class StudentHomeActivePracticeProcessComponent extends RetrieveData<PracticeProcess | null> implements OnInit {
  practiceProcess: PracticeProcess | null = null;
  @Input() student!: Student;

  ngOnInit(): void {
    this.loadData();
  }

  constructor(
    private readonly practiceProcessService: PracticeProcessService,
    private readonly router: Router,
    toastService: ToastService,
  ) {
    super(toastService);
  }

  onViewDetails(): void {
    this.router.navigate(['student/practice-processes', this.practiceProcess?._id]);
  }

  protected override fetchData(): Observable<PracticeProcess | null> {
    return this.practiceProcessService.getStudentCurrentPracticeProcess();
  }

  protected override onDataLoaded(data: PracticeProcess | null): void {
    this.practiceProcess = data;
  }

  protected override onError(error: any): void {
    console.error('Failed to load practice process data:', error);
  }

  BriefcaseIcon = Briefcase;
  EyeIcon = Eye;
  UserIcon = User;
  CalendarIcon = Calendar
}
