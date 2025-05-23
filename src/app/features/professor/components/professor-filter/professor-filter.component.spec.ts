import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorFilterComponent } from './professor-filter.component';

describe('ProfessorFilterComponent', () => {
  let component: ProfessorFilterComponent;
  let fixture: ComponentFixture<ProfessorFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfessorFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
