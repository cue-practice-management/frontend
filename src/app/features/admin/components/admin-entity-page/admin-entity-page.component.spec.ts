import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEntityPageComponent } from './admin-entity-page.component';

describe('AdminEntityPageComponent', () => {
  let component: AdminEntityPageComponent;
  let fixture: ComponentFixture<AdminEntityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEntityPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminEntityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
