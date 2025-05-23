import { User as UserModel } from '@/core/models/user.model';
import { CurrentUserService } from '@/core/services/current-user.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ADMIN_SIDEBAR_ITEMS } from '../../admin.constants';
import { LucideAngularModule, ChevronLeft, ChevronRight, User, LogOut, ChevronDown } from 'lucide-angular';
import { Router, RouterModule } from '@angular/router';
import { LogoComponent } from "@atoms/logo/logo.component";
import { AvatarComponent } from "@atoms/avatar/avatar.component";
import { DropdownComponent } from "@molecules/dropdown/dropdown.component";
import { DropdownItem } from '@molecules/dropdown/dropdown.models';
import { AuthService } from '@/features/auth/services/auth.service';

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, LogoComponent, AvatarComponent, DropdownComponent, RouterModule],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.scss'
})
export class AdminSidebarComponent implements OnInit {
  expandedItem = signal<string | null>(null);
  isCollapsed = signal(false);
  sidebarItems = ADMIN_SIDEBAR_ITEMS;

  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight;
  readonly ChevronDown = ChevronDown;
  readonly dropdownItems: DropdownItem[] = [
    { label: 'Cerrar sesión', icon: LogOut, danger: true, action: () => this.authService.logout() }
  ];


  constructor(
    private currentUserService: CurrentUserService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const currentUrl = this.router.url;
    const matchedItem = this.sidebarItems.find(item =>
      item.children?.some(child => currentUrl.includes(child.route ?? ''))
    );
    if (matchedItem) {
      this.expandedItem.set(matchedItem.label);
    }
  }

  toggleSidebar(): void {
    this.isCollapsed.update((prev) => !prev);
  }

  get currentUser(): UserModel | null {
    return this.currentUserService.currentUserValue;
  }

  toggleExpand(label: string): void {
    this.expandedItem.update(current => current === label ? null : label);
  }

  isExpanded(label: string): boolean {
    return this.expandedItem() === label;
  }
}