import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeTemplateDeliverableTableComponent } from './practice-template-deliverable-table.component';

describe('PracticeTemplateDeliverableTableComponent', () => {
  let component: PracticeTemplateDeliverableTableComponent;
  let fixture: ComponentFixture<PracticeTemplateDeliverableTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeTemplateDeliverableTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeTemplateDeliverableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
