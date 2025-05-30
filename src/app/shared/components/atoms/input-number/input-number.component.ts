import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-number',
  standalone: true,
  imports: [],
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss'
})
export class InputNumberComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() id = '';
  @Input() placeholder = '';

  private rawValue = '';

    ngOnInit(): void {
    const initialValue = this.control.value;
    if (initialValue != null && !isNaN(initialValue)) {
      this.rawValue = String(initialValue);
    }
  }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string): void {
    const sanitized = value.replace(/\D/g, '');
    this.rawValue = sanitized;

    const numericValue = sanitized === '' ? null : Number(sanitized);
    this.control.setValue(numericValue);
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    const allowed = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight'];
    if (allowed.includes(event.key)) return;

    if (!this.isValidNumber(event.key)) {
      event.preventDefault();
    }
  }

  get displayValue(): string {
    if (!this.rawValue) return '';
    return Number(this.rawValue).toLocaleString('es-CO');
  }

  private isValidNumber(value: string): boolean {
    return /^\d+$/.test(value);
  }

  hasErrors(): boolean {
    return this.control.invalid && (this.control.dirty || this.control.touched);
  }
  onBlur(): void {
    this.control.markAsTouched();
    this.control.updateValueAndValidity();
  }
}