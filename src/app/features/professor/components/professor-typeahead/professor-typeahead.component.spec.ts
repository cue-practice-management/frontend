import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorTypeaheadComponent } from './professor-typeahead.component';

describe('ProfessorTypeaheadComponent', () => {
  let component: ProfessorTypeaheadComponent;
  let fixture: ComponentFixture<ProfessorTypeaheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorTypeaheadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfessorTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
