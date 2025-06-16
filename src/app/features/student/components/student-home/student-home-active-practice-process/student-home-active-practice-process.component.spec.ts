import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentHomeActivePracticeProcessComponent } from './student-home-active-practice-process.component';

describe('StudentHomeActivePracticeProcessComponent', () => {
  let component: StudentHomeActivePracticeProcessComponent;
  let fixture: ComponentFixture<StudentHomeActivePracticeProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentHomeActivePracticeProcessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentHomeActivePracticeProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
