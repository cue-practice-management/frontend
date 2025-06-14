import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPracticeProcessPageComponent } from './admin-practice-process-page.component';

describe('AdminPracticeProcessPageComponent', () => {
  let component: AdminPracticeProcessPageComponent;
  let fixture: ComponentFixture<AdminPracticeProcessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPracticeProcessPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminPracticeProcessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
