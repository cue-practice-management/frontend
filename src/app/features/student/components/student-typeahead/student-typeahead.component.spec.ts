import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTypeaheadComponent } from './student-typeahead.component';

describe('StudentTypeaheadComponent', () => {
  let component: StudentTypeaheadComponent;
  let fixture: ComponentFixture<StudentTypeaheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentTypeaheadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
