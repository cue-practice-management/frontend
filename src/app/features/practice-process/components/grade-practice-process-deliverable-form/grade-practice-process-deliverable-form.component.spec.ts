import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradePracticeProcessDeliverableFormComponent } from './grade-practice-process-deliverable-form.component';

describe('GradePracticeProcessDeliverableFormComponent', () => {
  let component: GradePracticeProcessDeliverableFormComponent;
  let fixture: ComponentFixture<GradePracticeProcessDeliverableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradePracticeProcessDeliverableFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradePracticeProcessDeliverableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
