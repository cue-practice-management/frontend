import { Component, HostListener, inject } from '@angular/core';
import { LogoComponent } from '../../atoms/logo/logo.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { CommonModule, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { ROUTES } from '@/core/constants/routes.constants';
import { CurrentUserService } from '@/core/services/current-user.service';
import { User } from '@/core/models/user.model';
import { AuthService } from '@/features/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent, ButtonComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private lastScrollTop = 0;
  private scrollTimeout!: any;

  private router = inject(Router);
  private currentUserService = inject(CurrentUserService);
  private authService = inject(AuthService);

  user: User | null = this.currentUserService.currentUserValue;

  isScrolled = false;
  isHidden = false;


  navigateToLogin() {
    this.router.navigate([ROUTES.AUTH.LOGIN]);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 50;

    if (scrollTop > this.lastScrollTop && scrollTop > 100) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.isHidden = false;
    }, 150);
  }

  logout(): void {
    this.authService.logout();
  }


}
