import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulePracticeProcessFollowUpFormComponent } from './schedule-practice-process-follow-up-form.component';

describe('SchedulePracticeProcessFollowUpFormComponent', () => {
  let component: SchedulePracticeProcessFollowUpFormComponent;
  let fixture: ComponentFixture<SchedulePracticeProcessFollowUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedulePracticeProcessFollowUpFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchedulePracticeProcessFollowUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
