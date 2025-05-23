import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfessorPageComponent } from './admin-professor-page.component';

describe('AdminProfessorPageComponent', () => {
  let component: AdminProfessorPageComponent;
  let fixture: ComponentFixture<AdminProfessorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminProfessorPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminProfessorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
