import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeTemplateFormComponent } from './practice-template-form.component';

describe('PracticeTemplateFormComponent', () => {
  let component: PracticeTemplateFormComponent;
  let fixture: ComponentFixture<PracticeTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeTemplateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
