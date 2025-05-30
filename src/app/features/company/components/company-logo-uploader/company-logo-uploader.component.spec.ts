import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyLogoUploaderComponent } from './company-logo-uploader.component';

describe('CompanyLogoUploaderComponent', () => {
  let component: CompanyLogoUploaderComponent;
  let fixture: ComponentFixture<CompanyLogoUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyLogoUploaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyLogoUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
