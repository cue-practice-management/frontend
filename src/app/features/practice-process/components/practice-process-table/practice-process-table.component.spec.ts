import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeProcessTableComponent } from './practice-process-table.component';

describe('PracticeProcessTableComponent', () => {
  let component: PracticeProcessTableComponent;
  let fixture: ComponentFixture<PracticeProcessTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeProcessTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeProcessTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
