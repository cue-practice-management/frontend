import { Component, inject } from '@angular/core';
import { DropdownComponent } from "@molecules/dropdown/dropdown.component";
import { AvatarComponent } from "@atoms/avatar/avatar.component";
import { LinkComponent } from "@atoms/link/link.component";
import { LogoComponent } from "@atoms/logo/logo.component";
import { AlignJustify, LogOut, LucideAngularModule } from 'lucide-angular';
import { CurrentUserService } from '@/core/services/current-user.service';
import { AuthService } from '@/features/auth/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professor-nav',
  standalone: true,
  imports: [DropdownComponent, AvatarComponent, LinkComponent, LogoComponent, LucideAngularModule, CommonModule],
  templateUrl: './professor-nav.component.html',
  styleUrl: './professor-nav.component.scss'
})
export class ProfessorNavComponent {
  private authService = inject(AuthService);
  private currentUserService = inject(CurrentUserService);

  user = this.currentUserService.currentUser;
  menuOpen = false;

  logout(): void {
    this.authService.logout();
  }

  get dropdownItems() {
    return [
      { label: 'Cerrar sesión', icon: LogOut, danger: true, action: () => this.authService.logout() }
    ];

  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  HamburguerIcon = AlignJustify;
}
