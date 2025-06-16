import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeProcessDetailPageComponent } from './practice-process-detail-page.component';

describe('PracticeProcessDetailPageComponent', () => {
  let component: PracticeProcessDetailPageComponent;
  let fixture: ComponentFixture<PracticeProcessDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeProcessDetailPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeProcessDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
