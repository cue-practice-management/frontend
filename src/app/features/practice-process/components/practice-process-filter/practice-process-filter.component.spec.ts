import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeProcessFilterComponent } from './practice-process-filter.component';

describe('PracticeProcessFilterComponent', () => {
  let component: PracticeProcessFilterComponent;
  let fixture: ComponentFixture<PracticeProcessFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeProcessFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeProcessFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
