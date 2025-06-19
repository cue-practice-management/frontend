import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMetricCardListComponent } from './dashboard-metric-card-list.component';

describe('DashboardMetricCardListComponent', () => {
  let component: DashboardMetricCardListComponent;
  let fixture: ComponentFixture<DashboardMetricCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardMetricCardListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardMetricCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
