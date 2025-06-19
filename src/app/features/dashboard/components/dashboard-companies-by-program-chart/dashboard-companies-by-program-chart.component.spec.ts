import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCompaniesByProgramChartComponent } from './dashboard-companies-by-program-chart.component';

describe('DashboardCompaniesByProgramChartComponent', () => {
  let component: DashboardCompaniesByProgramChartComponent;
  let fixture: ComponentFixture<DashboardCompaniesByProgramChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCompaniesByProgramChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardCompaniesByProgramChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
