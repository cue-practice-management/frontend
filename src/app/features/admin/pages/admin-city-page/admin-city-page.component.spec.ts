import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCityPageComponent } from './admin-city-page.component';

describe('AdminCityPageComponent', () => {
  let component: AdminCityPageComponent;
  let fixture: ComponentFixture<AdminCityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCityPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
