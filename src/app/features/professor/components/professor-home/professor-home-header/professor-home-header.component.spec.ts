import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorHomeHeaderComponent } from './professor-home-header.component';

describe('ProfessorHomeHeaderComponent', () => {
  let component: ProfessorHomeHeaderComponent;
  let fixture: ComponentFixture<ProfessorHomeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorHomeHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfessorHomeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
