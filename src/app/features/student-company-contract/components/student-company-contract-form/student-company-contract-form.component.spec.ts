import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCompanyContractFormComponent } from './student-company-contract-form.component';

describe('StudentCompanyContractFormComponent', () => {
  let component: StudentCompanyContractFormComponent;
  let fixture: ComponentFixture<StudentCompanyContractFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentCompanyContractFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentCompanyContractFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
