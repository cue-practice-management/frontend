import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCompanyContractCancelFormComponent } from './student-company-contract-cancel-form.component';

describe('StudentCompanyContractCancelFormComponent', () => {
  let component: StudentCompanyContractCancelFormComponent;
  let fixture: ComponentFixture<StudentCompanyContractCancelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentCompanyContractCancelFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentCompanyContractCancelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
