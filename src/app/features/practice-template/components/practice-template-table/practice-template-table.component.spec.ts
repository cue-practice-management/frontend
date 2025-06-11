import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeTemplateTableComponent } from './practice-template-table.component';

describe('PracticeTemplateTableComponent', () => {
  let component: PracticeTemplateTableComponent;
  let fixture: ComponentFixture<PracticeTemplateTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeTemplateTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeTemplateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
