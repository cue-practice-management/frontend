import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailContractsComponent } from './company-detail-contracts.component';

describe('CompanyDetailContractsComponent', () => {
  let component: CompanyDetailContractsComponent;
  let fixture: ComponentFixture<CompanyDetailContractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyDetailContractsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyDetailContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
