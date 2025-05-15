import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicProgramFormComponent } from './academic-program-form.component';

describe('AcademicProgramFormComponent', () => {
  let component: AcademicProgramFormComponent;
  let fixture: ComponentFixture<AcademicProgramFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicProgramFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcademicProgramFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
