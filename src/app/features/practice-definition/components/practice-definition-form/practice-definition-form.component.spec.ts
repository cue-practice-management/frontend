import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeDefinitionFormComponent } from './practice-definition-form.component';

describe('PracticeDefinitionFormComponent', () => {
  let component: PracticeDefinitionFormComponent;
  let fixture: ComponentFixture<PracticeDefinitionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeDefinitionFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeDefinitionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
