import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorFormComponent } from './professor-form.component';

describe('ProfessorFormComponent', () => {
  let component: ProfessorFormComponent;
  let fixture: ComponentFixture<ProfessorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfessorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
