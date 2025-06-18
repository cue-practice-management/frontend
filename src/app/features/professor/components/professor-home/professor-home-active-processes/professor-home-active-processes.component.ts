import { ToastService } from '@/core/services/toast.service';
import { PracticeProcess } from '@/features/practice-process/practice-process.models';
import { PracticeProcessService } from '@/features/practice-process/services/practice-process.service';
import { Professor } from '@/features/professor/professor.models';
import { RetrieveData } from '@/shared/abstracts/retrieve-data';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StatusBadgeComponent } from "@atoms/status-badge/status-badge.component";
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from "@atoms/spinner/spinner.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor-home-active-processes',
  standalone: true,
  imports: [StatusBadgeComponent, CommonModule, SpinnerComponent],
  templateUrl: './professor-home-active-processes.component.html',
  styleUrl: './professor-home-active-processes.component.scss'
})
export class ProfessorHomeActiveProcessesComponent extends RetrieveData<PracticeProcess[]> implements OnInit {

  @Input() professor!: Professor;
  practiceProcesses: PracticeProcess[] = [];

  constructor(
    private readonly practiceProcessService: PracticeProcessService,
    private readonly router: Router,
    toastService: ToastService
  ) {
    super(toastService);
  }

  ngOnInit(): void {
    this.loadData();
  }

  protected override fetchData(): Observable<PracticeProcess[]> {
    return this.practiceProcessService.getProfessorCurrentPracticeProcesses();
  }

  protected override onDataLoaded(data: PracticeProcess[]): void {
    this.practiceProcesses = data;
  }

  protected override onError(error: any): void {

  }

  onProcessClicked(process: PracticeProcess): void {
    this.router.navigate(['professor/practice-processes', process._id]);
  }

}
