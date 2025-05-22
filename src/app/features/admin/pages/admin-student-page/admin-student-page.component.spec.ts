import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudentPageComponent } from './admin-student-page.component';

describe('AdminStudentPageComponent', () => {
  let component: AdminStudentPageComponent;
  let fixture: ComponentFixture<AdminStudentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminStudentPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminStudentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
