import { Component, Input, OnInit, HostListener, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SelectOption } from './input-select.models';
import { ClickOutsideDirective } from '@/shared/directives/click-outside.directive';

@Component({
  selector: 'app-input-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ClickOutsideDirective],
  templateUrl: './input-select.component.html',
  styleUrl: './input-select.component.scss'
})
export class InputSelectComponent implements OnInit, OnChanges {
  @Input() control!: FormControl;
  @Input() id = '';
  @Input() placeholder = 'Seleccionar...';
  @Input() options: SelectOption[] = [];

  showDropdown = false;
  labelSelected = '';

  ngOnInit(): void {
    this.setLabelSelected();
  }

  ngOnChanges(): void {
    this.setLabelSelected();
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  selectOption(option: SelectOption): void {
    this.labelSelected = option.label;
    this.control.setValue(option.value);
    this.showDropdown = false;
  }

  closeDropdown(): void {
    this.showDropdown = false;
  }

  get hasInitialValue(): boolean {
    return !!this.labelSelected;
  }
  private setLabelSelected(): void {
    const selected = this.options.find(o => o.value === this.control.value);
    if (selected) this.labelSelected = selected.label;
  }

}
