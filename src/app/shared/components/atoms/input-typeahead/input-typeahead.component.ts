import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { debounceTime } from 'rxjs';
import { TypeaheadConfig, TypeaheadItem } from '@/shared/models/typeahead-item.model';
import { ClickOutsideDirective } from '@/shared/directives/click-outside.directive';

@Component({
  selector: 'app-input-typeahead',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ClickOutsideDirective],
  templateUrl: './input-typeahead.component.html',
  styleUrl: './input-typeahead.component.scss'
})
export class InputTypeaheadComponent implements OnInit {
  @Input() id = '';
  @Input() control!: FormControl;
  @Input() config!: TypeaheadConfig;

  inputControl = new FormControl();
  options: TypeaheadItem[] = [];
  showDropdown = false;
  dropdownAbove = false;

  ngOnInit(): void {
    if (!this.control) {
      throw new Error('Control is required');
    }
    this.initializeOptions();
    this.handleInputChanges();
  }

  private handleInputChanges(): void {
    this.inputControl.valueChanges.pipe(debounceTime(300)).subscribe(term => {

      if (this.config.staticOptions) {
        this.options = this.config.staticOptions.filter(option =>
          option.label.toLowerCase().includes(term.toLowerCase())
        );
        this.showDropdown = true;
        this.setDropdownDirection();
        return;
      }

      if (this.config.retrieveOptions) {
        this.config.retrieveOptions(term).subscribe(results => {
          this.options = results;
          this.showDropdown = true;
          this.setDropdownDirection();
        });
        return;
      }

    });
  }

  private initializeOptions(): void {
    const value = this.control.value;

    if (this.config.retrieveOptionsFromExistingValue) {
      this.config.retrieveOptionsFromExistingValue().subscribe(results => {
        this.options = results;

        if (value) {
          const match = results.find(o => o.value === value);
          if (match) {
            this.inputControl.setValue(match.label, { emitEvent: false });
          }
        }
      });
      return;
    }

    if (this.config.staticOptions) {
      this.options = this.config.staticOptions;
      if (value) {
        const match = this.options.find(o => o.value === value);
        if (match) {
          this.inputControl.setValue(match.label, { emitEvent: false });
        }
      }
    }
  }

  selectOption(option: TypeaheadItem): void {
    this.control.setValue(option.value);
    this.inputControl.setValue(option.label, { emitEvent: false });
    this.showDropdown = false;
  }

  onOutsideClick(): void {
    this.showDropdown = false;
  }

private setDropdownDirection(): void {
  requestAnimationFrame(() => {
    const inputEl = document.getElementById(this.id);
    if (!inputEl) return;

    const rect = inputEl.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const dropdownHeight = 200;
    this.dropdownAbove = spaceBelow < dropdownHeight;
  });
}

  onBlur(): void {
    const label = this.inputControl.value?.trim();
    const match = this.options.find(o => o.label === label);

    console.log('onBlur', label, this.options);

    if (!match) {
      this.control.setValue(null);
      const errors = { ...(this.control.errors || {}) };
      errors['invalidOption'] = true;
      this.control.setErrors(errors);
    } else {
      this.control.setValue(match.value);
      const errors = { ...(this.control.errors || {}) };
      delete errors['invalidOption'];
      this.control.setErrors(Object.keys(errors).length ? errors : null);
    }

    this.control.markAsTouched();
  }

  hasErrors(): boolean {
    return this.control.invalid && (this.control.dirty || this.control.touched);
  }

}
