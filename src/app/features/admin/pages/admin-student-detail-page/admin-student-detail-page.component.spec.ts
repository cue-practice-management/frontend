import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudentDetailPageComponent } from './admin-student-detail-page.component';

describe('AdminStudentDetailPageComponent', () => {
  let component: AdminStudentDetailPageComponent;
  let fixture: ComponentFixture<AdminStudentDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminStudentDetailPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminStudentDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
