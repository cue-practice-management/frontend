import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SectionWrapperComponent } from "@atoms/section-wrapper/section-wrapper.component";
import { LogoComponent } from "../../../../shared/components/atoms/logo/logo.component";

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [SectionWrapperComponent, RouterOutlet, LogoComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {

}
