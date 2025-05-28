import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverPasswordValidatePageComponent } from './recover-password-validate-page.component';

describe('RecoverPasswordValidatePageComponent', () => {
  let component: RecoverPasswordValidatePageComponent;
  let fixture: ComponentFixture<RecoverPasswordValidatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoverPasswordValidatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecoverPasswordValidatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
