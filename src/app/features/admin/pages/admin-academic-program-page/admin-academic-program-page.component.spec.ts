import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAcademicProgramPageComponent } from './admin-academic-program-page.component';

describe('AdminAcademicProgramPageComponent', () => {
  let component: AdminAcademicProgramPageComponent;
  let fixture: ComponentFixture<AdminAcademicProgramPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAcademicProgramPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAcademicProgramPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
