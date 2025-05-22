import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicProgramTypeaheadComponent } from './academic-program-typeahead.component';

describe('AcademicProgramTypeaheadComponent', () => {
  let component: AcademicProgramTypeaheadComponent;
  let fixture: ComponentFixture<AcademicProgramTypeaheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicProgramTypeaheadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcademicProgramTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
