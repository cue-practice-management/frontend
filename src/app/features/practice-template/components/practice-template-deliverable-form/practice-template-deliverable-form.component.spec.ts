import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeTemplateDeliverableFormComponent } from './practice-template-deliverable-form.component';

describe('PracticeTemplateDeliverableFormComponent', () => {
  let component: PracticeTemplateDeliverableFormComponent;
  let fixture: ComponentFixture<PracticeTemplateDeliverableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeTemplateDeliverableFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeTemplateDeliverableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
