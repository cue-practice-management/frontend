import { WebSocketService } from '@/core/services/web-socket.service';
import { AuthService } from '@/features/auth/services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationPayload } from '../../notification.models';
import { Bell, Check, LucideAngularModule } from 'lucide-angular';
import { DropdownComponent } from "../../../../shared/components/molecules/dropdown/dropdown.component";
import { DropdownItem } from '@/shared/components/molecules/dropdown/dropdown.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [LucideAngularModule, DropdownComponent, CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent implements OnInit, OnDestroy {
  channel = 'notifications';
  notifications: NotificationPayload[] = [];

  Bell = Bell;
  Check = Check;

  constructor(
    private readonly wsService: WebSocketService,
    private readonly authService: AuthService,
  ) { }

  ngOnInit(): void {
    const token = this.authService.getAccessToken();
    this.wsService.connect(this.channel, token ?? undefined);

    this.wsService.on<NotificationPayload>(this.channel, 'notification').subscribe((notification) => {
      this.notifications = [notification, ...this.notifications];
    });
  }

  markAllAsRead(): void {
    this.notifications = this.notifications.map(n => ({ ...n, read: true }));
    // Aquí podrías llamar a un endpoint para marcarlas como leídas
  }

  ngOnDestroy(): void {
    this.wsService.disconnect(this.channel);
  }

  get unreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }

  get dropdownItems(): DropdownItem[] {
    const items: DropdownItem[] = this.notifications.map((n) => ({
      label: n.title,
      icon: n.read ? Check : undefined,
      disabled: false,
      action: () => this.openNotification(n),
    }));

    if (items.length > 0) {
      items.push({
        label: 'Marcar todas como leídas',
        shortcut: '⌘M',
        action: () => this.markAllAsRead(),
      });
    }

    return items;
  }

  private openNotification(notification: NotificationPayload): void {
    console.log('Abrir notificación:', notification);
  }
}