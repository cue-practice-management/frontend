import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyContractFormComponent } from './company-contract-form.component';

describe('CompanyContractFormComponent', () => {
  let component: CompanyContractFormComponent;
  let fixture: ComponentFixture<CompanyContractFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyContractFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyContractFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
