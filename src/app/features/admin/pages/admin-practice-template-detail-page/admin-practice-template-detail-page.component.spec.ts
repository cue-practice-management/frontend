import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPracticeTemplateDetailPageComponent } from './admin-practice-template-detail-page.component';

describe('AdminPracticeTemplateDetailPageComponent', () => {
  let component: AdminPracticeTemplateDetailPageComponent;
  let fixture: ComponentFixture<AdminPracticeTemplateDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPracticeTemplateDetailPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminPracticeTemplateDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
