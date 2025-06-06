import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCompanyContractTableComponent } from './student-company-contract-table.component';

describe('StudentCompanyContractTableComponent', () => {
  let component: StudentCompanyContractTableComponent;
  let fixture: ComponentFixture<StudentCompanyContractTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentCompanyContractTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentCompanyContractTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
