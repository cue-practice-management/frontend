import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { DynamicFormComponent } from '@/shared/components/organisms/dynamic-form/dynamic-form.component';
import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { RecoverPasswordValidateResponseDto } from '../../models/recover-password-validate-response.dto';
import { RecoverPasswordValidateRequestDto } from '../../models/recover-password-validate-request.dto';
import { AuthService } from '../../services/auth.service';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { RECOVER_EMAIL_KEY } from '../../auth.constants';
import { ROUTES } from '@/core/constants/routes.constants';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { CommonModule } from '@angular/common';
import { AppAuthCardComponent } from "../../components/auth-card/auth-card.component";
import { CheckCircleIcon } from 'lucide-angular';

@Component({
  selector: 'app-recover-password-validate-page',
  standalone: true,
  imports: [DynamicFormComponent, CommonModule, AppAuthCardComponent],
  templateUrl: './recover-password-validate-page.component.html',
  styleUrls: ['./recover-password-validate-page.component.scss'],
})
export class RecoverPasswordValidatePageComponent extends FormSubmitComponent<RecoverPasswordValidateRequestDto, RecoverPasswordValidateResponseDto> implements OnInit {

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    super();
  }

  email: string = '';

  formConfig!: DynacmicFormConfig;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'] || localStorage.getItem(RECOVER_EMAIL_KEY) || '';
      if (!this.email) {
        this.router.navigate([ROUTES.AUTH.RECOVER_PASSWORD]);
      }

      this.formConfig = {
        title: '',
        sections: [
          {
            fields: [
              {
                key: 'otp',
                label: 'Código de verificación',
                type: FormFieldType.OTP,
                placeholder: '123456',
                validators: [Validators.required]
              }
            ]
          }
        ]
      };
    });
  }

  onValidateOtpSubmit(formValue: { otp: string }): void {
    const payload: RecoverPasswordValidateRequestDto = {
      email: this.email,
      otp: formValue.otp
    };
    this.submitForm(payload);
  }

  protected override successMessage = 'Código de verificación válido. Redirigiendo...';

  override submitData(dto: RecoverPasswordValidateRequestDto) {
    return this.authService.recoverPasswordValidate(dto).pipe(
      tap(({ token }) => {
        this.router.navigate([ROUTES.AUTH.RECOVER_PASSWORD_RESET], {
          queryParams: { token }
        });
      })
    );
  }
  CheckCircleIcon = CheckCircleIcon
}
