import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormRowComponent } from './input-form-row.component';

describe('InputFormRowComponent', () => {
  let component: InputFormRowComponent;
  let fixture: ComponentFixture<InputFormRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputFormRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputFormRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
