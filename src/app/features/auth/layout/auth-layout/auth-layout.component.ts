import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SectionWrapperComponent } from "@atoms/section-wrapper/section-wrapper.component";

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [SectionWrapperComponent, RouterOutlet],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {

}
