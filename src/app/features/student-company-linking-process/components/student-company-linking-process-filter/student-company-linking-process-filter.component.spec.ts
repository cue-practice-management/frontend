import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCompanyLinkingProcessFilterComponent } from './student-company-linking-process-filter.component';

describe('StudentCompanyLinkingProcessFilterComponent', () => {
  let component: StudentCompanyLinkingProcessFilterComponent;
  let fixture: ComponentFixture<StudentCompanyLinkingProcessFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentCompanyLinkingProcessFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentCompanyLinkingProcessFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
