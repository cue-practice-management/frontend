import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeProcessDetailFormatsComponent } from './practice-process-detail-formats.component';

describe('PracticeProcessDetailFormatsComponent', () => {
  let component: PracticeProcessDetailFormatsComponent;
  let fixture: ComponentFixture<PracticeProcessDetailFormatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeProcessDetailFormatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeProcessDetailFormatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
