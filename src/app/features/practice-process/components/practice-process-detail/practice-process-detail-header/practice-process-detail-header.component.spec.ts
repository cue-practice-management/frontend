import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeProcessDetailHeaderComponent } from './practice-process-detail-header.component';

describe('PracticeProcessDetailHeaderComponent', () => {
  let component: PracticeProcessDetailHeaderComponent;
  let fixture: ComponentFixture<PracticeProcessDetailHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeProcessDetailHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeProcessDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
