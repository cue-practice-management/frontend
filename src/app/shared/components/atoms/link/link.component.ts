import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {
  @Input() href?: string;
  @Input() routerLink?: string | any[];
  @Input() target?: '_blank' | '_self' = '_self';
  @Input() rel?: string;
  @Input() underline: boolean = false;
  @Input() disabled: boolean = false;
}
