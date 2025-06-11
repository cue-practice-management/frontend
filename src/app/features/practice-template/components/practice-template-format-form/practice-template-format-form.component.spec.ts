import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeTemplateFormatFormComponent } from './practice-template-format-form.component';

describe('PracticeTemplateFormatFormComponent', () => {
  let component: PracticeTemplateFormatFormComponent;
  let fixture: ComponentFixture<PracticeTemplateFormatFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeTemplateFormatFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeTemplateFormatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
