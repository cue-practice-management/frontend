import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorHomePageComponent } from './professor-home-page.component';

describe('ProfessorHomePageComponent', () => {
  let component: ProfessorHomePageComponent;
  let fixture: ComponentFixture<ProfessorHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorHomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfessorHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
