import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, signal, ViewChild } from '@angular/core';
import { DropdownItem } from './dropdown.models';
import { ChevronDown, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  @Input() items: DropdownItem[] = [];

  isOpen = signal(false);
  position: 'top' | 'bottom' = 'bottom';
  ChevronDown = ChevronDown;

  @ViewChild('trigger') triggerRef!: ElementRef;
  @ViewChild('menu') menuRef!: ElementRef;

  toggle(): void {
    this.isOpen.update(open => !open);
    if (this.isOpen()) {
      setTimeout(() => this.setPosition(), 0);
    }
  }

  private setPosition(): void {
    const trigger = this.triggerRef.nativeElement;
    const menu = this.menuRef.nativeElement;
    const spaceBelow = window.innerHeight - trigger.getBoundingClientRect().bottom;
    const menuHeight = menu.offsetHeight;
    this.position = spaceBelow < menuHeight + 10 ? 'top' : 'bottom';
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent) {
    if (
      !this.triggerRef?.nativeElement.contains(event.target) &&
      !this.menuRef?.nativeElement.contains(event.target)
    ) {
      this.isOpen.set(false);
    }
  }

  onItemClick(item: DropdownItem): void {
    if (!item.disabled) {
      this.isOpen.set(false);
      item.action();
    }
  }
}
