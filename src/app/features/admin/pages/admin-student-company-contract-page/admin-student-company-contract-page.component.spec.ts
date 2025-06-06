import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudentCompanyContractPageComponent } from './admin-student-company-contract-page.component';

describe('AdminStudentCompanyContractPageComponent', () => {
  let component: AdminStudentCompanyContractPageComponent;
  let fixture: ComponentFixture<AdminStudentCompanyContractPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminStudentCompanyContractPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminStudentCompanyContractPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
