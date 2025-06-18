import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorHomeActiveProcessesComponent } from './professor-home-active-processes.component';

describe('ProfessorHomeActiveProcessesComponent', () => {
  let component: ProfessorHomeActiveProcessesComponent;
  let fixture: ComponentFixture<ProfessorHomeActiveProcessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorHomeActiveProcessesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfessorHomeActiveProcessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
