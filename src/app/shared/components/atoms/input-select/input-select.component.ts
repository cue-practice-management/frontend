import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SelectOption } from './input-select.models';
import { ClickOutsideDirective } from '@/shared/directives/click-outside.directive';
import { ChevronDown, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-input-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ClickOutsideDirective, LucideAngularModule],
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
  ChevronDown = ChevronDown;

  ngOnInit(): void {
    this.setLabelSelected();
  }

  ngOnChanges(): void {
    this.setLabelSelected();
  }

  toggleDropdown(): void {
    this.control.markAsTouched();
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

  get hasErrors(): boolean {
    return this.control.invalid && (this.control.dirty || this.control.touched);

  }
  
  private setLabelSelected(): void {
    const selected = this.options.find(o => o.value === this.control.value);
    if (selected) this.labelSelected = selected.label;
  }

}
