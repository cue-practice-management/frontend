import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTypeaheadComponent } from './input-typeahead.component';

describe('InputTypeaheadComponent', () => {
  let component: InputTypeaheadComponent;
  let fixture: ComponentFixture<InputTypeaheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTypeaheadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
