import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelPracticeProcessFollowUpFormComponent } from './cancel-practice-process-follow-up-form.component';

describe('CancelPracticeProcessFollowUpFormComponent', () => {
  let component: CancelPracticeProcessFollowUpFormComponent;
  let fixture: ComponentFixture<CancelPracticeProcessFollowUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelPracticeProcessFollowUpFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CancelPracticeProcessFollowUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
