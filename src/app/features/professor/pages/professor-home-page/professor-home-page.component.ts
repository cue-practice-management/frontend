import { RetrieveData } from '@/shared/abstracts/retrieve-data';
import { Component, OnInit } from '@angular/core';
import { Professor } from '../../professor.models';
import { ProfessorService } from '../../services/professor.service';
import { ToastService } from '@/core/services/toast.service';
import { Observable } from 'rxjs';
import { SectionWrapperComponent } from "@atoms/section-wrapper/section-wrapper.component";
import { ProfessorHomeHeaderComponent } from "../../components/professor-home/professor-home-header/professor-home-header.component";
import { CommonModule } from '@angular/common';
import { ProfessorHomeActiveProcessesComponent } from "../../components/professor-home/professor-home-active-processes/professor-home-active-processes.component";

@Component({
  selector: 'app-professor-home-page',
  standalone: true,
  imports: [SectionWrapperComponent, ProfessorHomeHeaderComponent, CommonModule, ProfessorHomeActiveProcessesComponent],
  templateUrl: './professor-home-page.component.html',
  styleUrl: './professor-home-page.component.scss'
})
export class ProfessorHomePageComponent extends RetrieveData<Professor> implements OnInit {

  professor: Professor | null = null; 

  constructor(
    private readonly professorService: ProfessorService,
    toastService: ToastService
  ) {
    super(toastService);
  }

  ngOnInit(): void {
    this.loadData();
  }

  protected override fetchData(): Observable<Professor> {
    return this.professorService.getCurrentProfessor();
  }

  protected override onDataLoaded(data: Professor): void {
    this.professor = data;
  }

  protected override onError(error: any): void {
    console.error('Error loading professor data:', error);
  }

}
