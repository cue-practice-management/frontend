import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPracticeTemplatePageComponent } from './admin-practice-template-page.component';

describe('AdminPracticeTemplatePageComponent', () => {
  let component: AdminPracticeTemplatePageComponent;
  let fixture: ComponentFixture<AdminPracticeTemplatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPracticeTemplatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminPracticeTemplatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
