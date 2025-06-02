import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTypeaheadComponent } from './company-typeahead.component';

describe('CompanyTypeaheadComponent', () => {
  let component: CompanyTypeaheadComponent;
  let fixture: ComponentFixture<CompanyTypeaheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyTypeaheadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
