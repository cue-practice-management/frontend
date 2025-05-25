import { SectionWrapperComponent } from '@/shared/components/atoms/section-wrapper/section-wrapper.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { Component } from '@angular/core';
import { LogoComponent } from "@/shared/components/atoms/logo/logo.component";
import { LinkComponent } from "@atoms/link/link.component";
import { ROUTES } from '@/core/constants/routes.constants';
import { toAbsolutePath } from '@/core/utils/router.utils';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [SectionWrapperComponent, LoginFormComponent, LogoComponent, LinkComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  recoverPasswordLink = toAbsolutePath(ROUTES.AUTH.RECOVER_PASSWORD)
}
