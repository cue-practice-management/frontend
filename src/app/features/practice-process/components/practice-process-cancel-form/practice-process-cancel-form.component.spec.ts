import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeProcessCancelFormComponent } from './practice-process-cancel-form.component';

describe('PracticeProcessCancelFormComponent', () => {
  let component: PracticeProcessCancelFormComponent;
  let fixture: ComponentFixture<PracticeProcessCancelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeProcessCancelFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeProcessCancelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
