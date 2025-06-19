import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCompaniesByCityMapComponent } from './dashboard-companies-by-city-map.component';

describe('DashboardCompaniesByCityMapComponent', () => {
  let component: DashboardCompaniesByCityMapComponent;
  let fixture: ComponentFixture<DashboardCompaniesByCityMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCompaniesByCityMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardCompaniesByCityMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
