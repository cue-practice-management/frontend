import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeProcessDetailDeliverablesComponent } from './practice-process-detail-deliverables.component';

describe('PracticeProcessDetailDeliverablesComponent', () => {
  let component: PracticeProcessDetailDeliverablesComponent;
  let fixture: ComponentFixture<PracticeProcessDetailDeliverablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeProcessDetailDeliverablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeProcessDetailDeliverablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
