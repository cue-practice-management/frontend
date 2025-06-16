import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentHomeHeaderComponent } from './student-home-header.component';

describe('StudentHomeHeaderComponent', () => {
  let component: StudentHomeHeaderComponent;
  let fixture: ComponentFixture<StudentHomeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentHomeHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentHomeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
