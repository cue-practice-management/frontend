import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEntityFilterComponent } from './admin-entity-filter.component';

describe('AdminEntityFilterComponent', () => {
  let component: AdminEntityFilterComponent;
  let fixture: ComponentFixture<AdminEntityFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEntityFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminEntityFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
