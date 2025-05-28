import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCountryPageComponent } from './admin-country-page.component';

describe('AdminCountryPageComponent', () => {
  let component: AdminCountryPageComponent;
  let fixture: ComponentFixture<AdminCountryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCountryPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCountryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
