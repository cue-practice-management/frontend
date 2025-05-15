import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicProgramTableComponent } from './academic-program-table.component';

describe('AcademicProgramTableComponent', () => {
  let component: AcademicProgramTableComponent;
  let fixture: ComponentFixture<AcademicProgramTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicProgramTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcademicProgramTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
