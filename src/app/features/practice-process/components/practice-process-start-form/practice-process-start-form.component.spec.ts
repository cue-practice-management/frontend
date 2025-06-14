import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeProcessStartFormComponent } from './practice-process-start-form.component';

describe('PracticeProcessStartFormComponent', () => {
  let component: PracticeProcessStartFormComponent;
  let fixture: ComponentFixture<PracticeProcessStartFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeProcessStartFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeProcessStartFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
