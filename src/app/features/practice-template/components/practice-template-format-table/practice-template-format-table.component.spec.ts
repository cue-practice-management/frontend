import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeTemplateFormatTableComponent } from './practice-template-format-table.component';

describe('PracticeTemplateFormatTableComponent', () => {
  let component: PracticeTemplateFormatTableComponent;
  let fixture: ComponentFixture<PracticeTemplateFormatTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeTemplateFormatTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeTemplateFormatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
