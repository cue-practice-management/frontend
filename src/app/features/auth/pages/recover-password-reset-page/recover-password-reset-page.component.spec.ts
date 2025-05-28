import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverPasswordResetPageComponent } from './recover-password-reset-page.component';

describe('RecoverPasswordResetPageComponent', () => {
  let component: RecoverPasswordResetPageComponent;
  let fixture: ComponentFixture<RecoverPasswordResetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoverPasswordResetPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecoverPasswordResetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
