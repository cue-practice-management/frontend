import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMentorFormComponent } from './company-mentor-form.component';

describe('CompanyMentorFormComponent', () => {
  let component: CompanyMentorFormComponent;
  let fixture: ComponentFixture<CompanyMentorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyMentorFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyMentorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
