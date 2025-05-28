import { Component, Input, OnInit } from '@angular/core';
import { MultiSelectConfig, MultiSelectItem } from './input-multi-select.models';
import { FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from '@/shared/directives/click-outside.directive';

@Component({
  selector: 'app-input-multi-select',
  templateUrl: './input-multi-select.component.html',
  styleUrls: ['./input-multi-select.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ClickOutsideDirective]
})
export class InputMultiSelectComponent implements OnInit {
  @Input() id = '';
  @Input() control!: FormControl<string[]>;
  @Input() config!: MultiSelectConfig;

  inputTerm = '';
  filteredOptions: MultiSelectItem[] = [];
  selectedItems: MultiSelectItem[] = [];
  showDropdown = false;

  ngOnInit(): void {
    if (!this.control) throw new Error('FormControl is required');
    this.loadSelectedFromControl();
  }

  onInput(term: string): void {
    if (this.config.staticOptions) {
      this.filteredOptions = this.config.staticOptions.filter(o =>
        o.label.toLowerCase().includes(term.toLowerCase())
      );
      this.showDropdown = true;
    } else if (this.config.retrieveOptions) {
      this.config.retrieveOptions(term).subscribe(results => {
        this.filteredOptions = results;
        this.showDropdown = true;
      });
    }
  }

  selectOption(option: MultiSelectItem): void {
    if (!this.selectedItems.find(i => i.value === option.value)) {
      this.selectedItems.push(option);
      this.updateControl();
    }
    this.inputTerm = '';
    this.showDropdown = false;
  }

  removeItem(item: MultiSelectItem): void {
    this.selectedItems = this.selectedItems.filter(i => i.value !== item.value);
    this.updateControl();
  }

  private loadSelectedFromControl(): void {
    const current = this.control.value || [];
    const allOptions = this.config.staticOptions || [];
    this.selectedItems = allOptions.filter(o => current.includes(o.value));
  }

  private updateControl(): void {
    this.control.setValue(this.selectedItems.map(i => i.value));
    this.control.markAsTouched();
  }

  onOutsideClick(): void {
    this.showDropdown = false;
  }
}
