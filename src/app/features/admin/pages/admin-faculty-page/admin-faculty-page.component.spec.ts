import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFacultyPageComponent } from './admin-faculty-page.component';

describe('AdminFacultyPageComponent', () => {
  let component: AdminFacultyPageComponent;
  let fixture: ComponentFixture<AdminFacultyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminFacultyPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminFacultyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
