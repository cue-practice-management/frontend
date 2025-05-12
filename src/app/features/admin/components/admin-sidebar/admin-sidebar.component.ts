import { User } from '@/core/models/user.model';
import { CurrentUserService } from '@/core/services/current-user.service';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ADMIN_SIDEBAR_ITEMS } from '../../admin.constants';
import { LucideAngularModule, ChevronLeft, ChevronRight } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { LogoComponent } from "../../../../shared/components/atoms/logo/logo.component";
import { AvatarComponent } from "../../../../shared/components/atoms/avatar/avatar.component";

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterModule, LogoComponent, AvatarComponent],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.scss'
})
export class AdminSidebarComponent {
  isCollapsed = signal(false);
  sidebarItems = ADMIN_SIDEBAR_ITEMS;

  constructor(private currentUserService: CurrentUserService) { }

  toggleSidebar(): void {
    this.isCollapsed.update((prev) => !prev);
  }

  get currentUser(): User | null {
    console.log('currentUser', this.currentUserService.currentUserValue);
    return this.currentUserService.currentUserValue;
  }


  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight;
}