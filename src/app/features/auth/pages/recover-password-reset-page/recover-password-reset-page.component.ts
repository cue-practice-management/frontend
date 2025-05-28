import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { DynamicFormComponent } from '@/shared/components/organisms/dynamic-form/dynamic-form.component';
import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { AuthService } from '../../services/auth.service';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { RecoverResetPasswordRequestDto } from '../../models/recover-reset-password-request.dto';
import { RECOVER_EMAIL_KEY } from '../../auth.constants';
import { ROUTES } from '@/core/constants/routes.constants';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { CommonModule } from '@angular/common';
import { AppAuthCardComponent } from "../../components/auth-card/auth-card.component";
import { UserLockIcon } from 'lucide-angular';

@Component({
  selector: 'app-recover-password-reset-page',
  standalone: true,
  imports: [DynamicFormComponent, CommonModule, AppAuthCardComponent],
  templateUrl: './recover-password-reset-page.component.html',
  styleUrls: ['./recover-password-reset-page.component.scss'],
})
export class RecoverPasswordResetPageComponent extends FormSubmitComponent<RecoverResetPasswordRequestDto, void> implements OnInit {

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    super();
  }

  token: string = '';
  formConfig!: DynacmicFormConfig;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'] || '';
      if (!this.token) {
        this.router.navigate(['/auth/recover-password']);
      }

      this.formConfig = {
        title: '',
        sections: [
          {
            fields: [
              {
                key: 'newPassword',
                label: 'Nueva contraseña',
                type: FormFieldType.PASSWORD,
                placeholder: '••••••••',
                validators: [Validators.required, Validators.minLength(6)]
              }
            ]
          }
        ]
      };
    });
  }

  onResetPasswordSubmit(formValue: { newPassword: string }): void {
    const payload: RecoverResetPasswordRequestDto = {
      token: this.token,
      newPassword: formValue.newPassword
    };
    this.submitForm(payload);
  }

  protected override successMessage = 'Contraseña actualizada correctamente.';

  override submitData(dto: RecoverResetPasswordRequestDto) {
    return this.authService.recoverResetPassword(dto).pipe(
      tap(() => {
        localStorage.removeItem(RECOVER_EMAIL_KEY);
        this.router.navigate([ROUTES.AUTH.LOGIN]);
      })
    );
  }

  LockIcon = UserLockIcon;
}
