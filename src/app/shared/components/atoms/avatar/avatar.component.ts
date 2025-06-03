import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input() src?: string = '';
  @Input() alt: string = 'Avatar';
  @Input() size: AvatarSize = 'sm'; 

  defaultAvatar = '/assets/images/common/default-profile-image.png';
}