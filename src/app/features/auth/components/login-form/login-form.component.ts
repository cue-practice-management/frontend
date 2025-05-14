import { Component, inject } from '@angular/core';
import { DynamicFormComponent } from '@/shared/components/organisms/dynamic-form/dynamic-form.component';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { LoginRequestDto } from '../../models/login-request.dto';

import { Validators } from '@angular/forms';
import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { LoginResponseDto } from '../../models/login-response.dto';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { FormFieldType } from '@/shared/models/form-field-type.enum';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent extends FormSubmitComponent<LoginRequestDto, LoginResponseDto> {

  private readonly authService: AuthService = inject(AuthService);

  loginFormConfig: DynacmicFormConfig =
    {
      title: 'Iniciar sesión',
      sections: [
        {
          fields: [
            {
              key: 'email',
              label: 'Correo electrónico',
              type: FormFieldType.TEXT,
              placeholder: 'ejemplo@correo.com',
              validators: [Validators.required, Validators.email],
            },
            {
              key: 'password',
              label: 'Contraseña',
              type: FormFieldType.PASSWORD,
              placeholder: '••••••••',
              validators: [Validators.required, Validators.minLength(6)],
            }
          ]
        }
      ]
    }

  onLoginSubmit(formValue: LoginRequestDto): void {
    this.submitForm(formValue);
  }

  protected override successMessage: string = 'Bienvenido de nuevo!';

  override submitData(loginRequest: LoginRequestDto): Observable<LoginResponseDto> {

    return this.authService.login(loginRequest);

  }
}




