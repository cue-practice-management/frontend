import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMentorFilterComponent } from './company-mentor-filter.component';

describe('CompanyMentorFilterComponent', () => {
  let component: CompanyMentorFilterComponent;
  let fixture: ComponentFixture<CompanyMentorFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyMentorFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyMentorFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
