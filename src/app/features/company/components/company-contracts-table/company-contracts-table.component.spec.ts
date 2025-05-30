import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyContractsTableComponent } from './company-contracts-table.component';

describe('CompanyContractsTableComponent', () => {
  let component: CompanyContractsTableComponent;
  let fixture: ComponentFixture<CompanyContractsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyContractsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyContractsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
