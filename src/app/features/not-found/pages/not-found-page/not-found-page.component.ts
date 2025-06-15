import { Component } from '@angular/core';
import { ButtonComponent } from "@atoms/button/button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss'
})
export class NotFoundPageComponent {
  constructor(
    private readonly router: Router
  ) { }

  onGoToHome(): void{
    this.router.navigate(['/']);
  }

}
