import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorNavComponent } from './professor-nav.component';

describe('ProfessorNavComponent', () => {
  let component: ProfessorNavComponent;
  let fixture: ComponentFixture<ProfessorNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfessorNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
