import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TypeaheadConfig, TypeaheadItem } from '@/shared/models/typeahead-item.model';

@Component({
  selector: 'app-input-typeahead',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-typeahead.component.html',
  styleUrl: './input-typeahead.component.scss'
})
export class InputTypeaheadComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() id = '';
  @Input() config!: TypeaheadConfig;

  displayLabel = '';
  showDropdown = false;

  ngOnInit(): void {
    const selectedValue = this.control.value;
    const selected = this.config.options?.find(o => o.value === selectedValue);
    this.displayLabel = selected?.label ?? '';
  }

  onInput(event: Event): void {
    const term = (event.target as HTMLInputElement).value;
    this.displayLabel = term;

    this.showDropdown = true;

    if (this.config.onSearch) {
      this.config.onSearch(term);
    }
  }

  selectOption(option: TypeaheadItem): void {
    this.control.setValue(option.value);       
    this.displayLabel = option.label;            
    this.showDropdown = false;
  }
}
