import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeDefinitionTypeaheadComponent } from './practice-definition-typeahead.component';

describe('PracticeDefinitionTypeaheadComponent', () => {
  let component: PracticeDefinitionTypeaheadComponent;
  let fixture: ComponentFixture<PracticeDefinitionTypeaheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeDefinitionTypeaheadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeDefinitionTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
