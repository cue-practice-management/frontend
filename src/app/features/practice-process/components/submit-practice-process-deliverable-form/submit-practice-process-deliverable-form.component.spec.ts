import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitPracticeProcessDeliverableFormComponent } from './submit-practice-process-deliverable-form.component';

describe('SubmitPracticeProcessDeliverableFormComponent', () => {
  let component: SubmitPracticeProcessDeliverableFormComponent;
  let fixture: ComponentFixture<SubmitPracticeProcessDeliverableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitPracticeProcessDeliverableFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmitPracticeProcessDeliverableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
