import { SectionWrapperComponent } from '@/shared/components/atoms/section-wrapper/section-wrapper.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { Component } from '@angular/core';
import { LogoComponent } from "@/shared/components/atoms/logo/logo.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [SectionWrapperComponent, LoginFormComponent, LogoComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
}
