import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCompanyLinkingProcessTableComponent } from './student-company-linking-process-table.component';

describe('StudentCompanyLinkingProcessTableComponent', () => {
  let component: StudentCompanyLinkingProcessTableComponent;
  let fixture: ComponentFixture<StudentCompanyLinkingProcessTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentCompanyLinkingProcessTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentCompanyLinkingProcessTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
