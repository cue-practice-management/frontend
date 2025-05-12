import { User as UserModel } from '@/core/models/user.model';
import { CurrentUserService } from '@/core/services/current-user.service';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ADMIN_SIDEBAR_ITEMS } from '../../admin.constants';
import { LucideAngularModule, ChevronLeft, ChevronRight, User, LogOut } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { LogoComponent } from "@atoms/logo/logo.component";
import { AvatarComponent } from "@atoms/avatar/avatar.component";
import { DropdownComponent } from "@molecules/dropdown/dropdown.component";
import { DropdownItem } from '@molecules/dropdown/dropdown.models';
import { AuthService } from '@/features/auth/services/auth.service';

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterModule, LogoComponent, AvatarComponent, DropdownComponent],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.scss'
})
export class AdminSidebarComponent {
  isCollapsed = signal(false);
  sidebarItems = ADMIN_SIDEBAR_ITEMS;

  constructor(private currentUserService: CurrentUserService, private authService: AuthService) { }

  toggleSidebar(): void {
    this.isCollapsed.update((prev) => !prev);
  }

  get currentUser(): UserModel | null {
    return this.currentUserService.currentUserValue;
  }

  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight;
  readonly dropdownItems: DropdownItem[] = [
    { label: 'Cerrar sesión', icon: LogOut, danger: true, action: () => this.authService.logout() }
  ];
}