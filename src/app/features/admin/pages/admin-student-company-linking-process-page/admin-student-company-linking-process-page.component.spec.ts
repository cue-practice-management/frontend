import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudentCompanyLinkingProcessPageComponent } from './admin-student-company-linking-process-page.component';

describe('AdminStudentCompanyLinkingProcessPageComponent', () => {
  let component: AdminStudentCompanyLinkingProcessPageComponent;
  let fixture: ComponentFixture<AdminStudentCompanyLinkingProcessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminStudentCompanyLinkingProcessPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminStudentCompanyLinkingProcessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
