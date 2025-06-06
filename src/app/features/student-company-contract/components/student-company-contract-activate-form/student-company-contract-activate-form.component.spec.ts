import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCompanyContractActivateFormComponent } from './student-company-contract-activate-form.component';

describe('StudentCompanyContractActivateFormComponent', () => {
  let component: StudentCompanyContractActivateFormComponent;
  let fixture: ComponentFixture<StudentCompanyContractActivateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentCompanyContractActivateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentCompanyContractActivateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
