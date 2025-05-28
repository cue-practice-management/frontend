import { DynamicFormComponent } from '@/shared/components/organisms/dynamic-form/dynamic-form.component';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { RecoverPasswordRequestDto } from '../../models/recover-password-request.dto';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { Validators } from '@angular/forms';
import { RECOVER_EMAIL_KEY } from '../../auth.constants';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { ROUTES } from '@/core/constants/routes.constants';
import { AppAuthCardComponent } from "../../components/auth-card/auth-card.component";
import { LockIcon } from 'lucide-angular';

@Component({
  selector: 'app-recover-password-page',
  standalone: true,
  imports: [DynamicFormComponent, AppAuthCardComponent],
  templateUrl: './recover-password-page.component.html',
  styleUrls: ['./recover-password-page.component.scss'],
})
export class RecoverPasswordPageComponent extends FormSubmitComponent<RecoverPasswordRequestDto, void> {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    super();
  }


  recoverPasswordFormConfig: DynacmicFormConfig = {
    title: '',
    sections: [
      {
        fields: [
          {
            key: 'email',
            label: 'Correo electrónico',
            type: FormFieldType.TEXT,
            placeholder: 'ejemplo@correo.com',
            validators: [Validators.required, Validators.email],
          }
        ]
      }
    ]
  };

  onRecoverPasswordSubmit(formValue: RecoverPasswordRequestDto): void {
    this.submitForm(formValue);
  }

  protected override successMessage: string = 'Hemos enviado un correo electrónico con las instrucciones para recuperar tu contraseña.';

  override submitData(dto: RecoverPasswordRequestDto): any {
    return this.authService.recoverPassword(dto).pipe(
      tap(() => {
        localStorage.setItem(RECOVER_EMAIL_KEY, dto.email);
        this.router.navigate([ROUTES.AUTH.RECOVER_PASSWORD_VALIDATE], {
          queryParams: { email: dto.email },
        });
      })
    );
  }

  LockIcon = LockIcon;
}