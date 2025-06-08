import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCompanyContractDetailComponent } from './student-company-contract-detail.component';

describe('StudentCompanyContractDetailComponent', () => {
  let component: StudentCompanyContractDetailComponent;
  let fixture: ComponentFixture<StudentCompanyContractDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentCompanyContractDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentCompanyContractDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
