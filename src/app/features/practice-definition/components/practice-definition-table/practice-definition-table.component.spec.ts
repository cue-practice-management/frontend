import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeDefinitionTableComponent } from './practice-definition-table.component';

describe('PracticeDefinitionTableComponent', () => {
  let component: PracticeDefinitionTableComponent;
  let fixture: ComponentFixture<PracticeDefinitionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeDefinitionTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeDefinitionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
