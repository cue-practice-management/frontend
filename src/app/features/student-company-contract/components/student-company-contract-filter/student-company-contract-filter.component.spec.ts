import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCompanyContractFilterComponent } from './student-company-contract-filter.component';

describe('StudentCompanyContractFilterComponent', () => {
  let component: StudentCompanyContractFilterComponent;
  let fixture: ComponentFixture<StudentCompanyContractFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentCompanyContractFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentCompanyContractFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
