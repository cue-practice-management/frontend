import { ButtonComponent } from '@/shared/components/atoms/button/button.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unauthorized-page',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './unauthorized-page.component.html',
  styleUrl: './unauthorized-page.component.scss'
})
export class UnauthorizedPageComponent {

  constructor(
    private readonly router: Router
  ) { }

  onGoToHome(): void {
    this.router.navigate(['/']);
  }
}
