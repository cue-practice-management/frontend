import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSectionWrapperComponent } from './admin-section-wrapper.component';

describe('AdminSectionWrapperComponent', () => {
  let component: AdminSectionWrapperComponent;
  let fixture: ComponentFixture<AdminSectionWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSectionWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminSectionWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
