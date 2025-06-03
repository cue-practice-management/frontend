import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCompanyLinkingProcessFormComponent } from './student-company-linking-process-form.component';

describe('StudentCompanyLinkingProcessFormComponent', () => {
  let component: StudentCompanyLinkingProcessFormComponent;
  let fixture: ComponentFixture<StudentCompanyLinkingProcessFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentCompanyLinkingProcessFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentCompanyLinkingProcessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
