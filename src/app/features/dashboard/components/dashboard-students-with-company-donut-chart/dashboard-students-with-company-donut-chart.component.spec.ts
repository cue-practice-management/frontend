import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStudentsWithCompanyDonutChartComponent } from './dashboard-students-with-company-donut-chart.component';

describe('DashboardStudentsWithCompanyDonutChartComponent', () => {
  let component: DashboardStudentsWithCompanyDonutChartComponent;
  let fixture: ComponentFixture<DashboardStudentsWithCompanyDonutChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardStudentsWithCompanyDonutChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardStudentsWithCompanyDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
