import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyDetailPageComponent } from './admin-company-detail-page.component';

describe('AdminCompanyDetailPageComponent', () => {
  let component: AdminCompanyDetailPageComponent;
  let fixture: ComponentFixture<AdminCompanyDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCompanyDetailPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCompanyDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
