import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentHomeCurrentCompanyComponent } from './student-home-current-company.component';

describe('StudentHomeCurrentCompanyComponent', () => {
  let component: StudentHomeCurrentCompanyComponent;
  let fixture: ComponentFixture<StudentHomeCurrentCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentHomeCurrentCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentHomeCurrentCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
