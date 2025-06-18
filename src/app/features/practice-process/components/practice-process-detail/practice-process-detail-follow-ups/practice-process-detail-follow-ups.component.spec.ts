import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeProcessDetailFollowUpsComponent } from './practice-process-detail-follow-ups.component';

describe('PracticeProcessDetailFollowUpsComponent', () => {
  let component: PracticeProcessDetailFollowUpsComponent;
  let fixture: ComponentFixture<PracticeProcessDetailFollowUpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeProcessDetailFollowUpsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeProcessDetailFollowUpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
