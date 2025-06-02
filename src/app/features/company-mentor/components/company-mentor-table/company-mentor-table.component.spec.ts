import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMentorTableComponent } from './company-mentor-table.component';

describe('CompanyMentorTableComponent', () => {
  let component: CompanyMentorTableComponent;
  let fixture: ComponentFixture<CompanyMentorTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyMentorTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyMentorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
