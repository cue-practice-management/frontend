import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStudentsByProgramChartComponent } from './dashboard-students-by-program-chart.component';

describe('DashboardStudentsByProgramChartComponent', () => {
  let component: DashboardStudentsByProgramChartComponent;
  let fixture: ComponentFixture<DashboardStudentsByProgramChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardStudentsByProgramChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardStudentsByProgramChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
