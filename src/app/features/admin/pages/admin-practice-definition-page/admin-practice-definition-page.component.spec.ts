import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPracticeDefinitionPageComponent } from './admin-practice-definition-page.component';

describe('AdminPracticeDefinitionPageComponent', () => {
  let component: AdminPracticeDefinitionPageComponent;
  let fixture: ComponentFixture<AdminPracticeDefinitionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPracticeDefinitionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminPracticeDefinitionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
