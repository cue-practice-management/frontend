import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyMentorPageComponent } from './admin-company-mentor-page.component';

describe('AdminCompanyMentorPageComponent', () => {
  let component: AdminCompanyMentorPageComponent;
  let fixture: ComponentFixture<AdminCompanyMentorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCompanyMentorPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCompanyMentorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
