import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletePracticeProcessFollowUpFormComponent } from './complete-practice-process-follow-up-form.component';

describe('CompletePracticeProcessFollowUpFormComponent', () => {
  let component: CompletePracticeProcessFollowUpFormComponent;
  let fixture: ComponentFixture<CompletePracticeProcessFollowUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletePracticeProcessFollowUpFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompletePracticeProcessFollowUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
