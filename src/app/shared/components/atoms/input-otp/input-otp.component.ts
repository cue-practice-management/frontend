import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgOtpInputModule, NgOtpInputConfig } from 'ng-otp-input';

@Component({
  selector: 'app-input-otp',
  standalone: true,
  templateUrl: './input-otp.component.html',
  styleUrls: ['./input-otp.component.scss'],
  imports: [CommonModule, NgOtpInputModule],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputOtpComponent),
    multi: true
  }]
})
export class InputOtpComponent implements ControlValueAccessor, OnInit {
  @Input() length = 6;

  otpValue: string = '';

  otpConfig!: NgOtpInputConfig;

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  ngOnInit(): void {
    this.otpConfig = {
      allowNumbersOnly: true,
      length: this.length,
      inputClass: 'input-otp__cell',
      containerClass: 'input-otp__container',
      disableAutoFocus: false,
      isPasswordInput: false,
      placeholder: '•'
    };
  }

  writeValue(value: string): void {
    this.otpValue = value ?? '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onOtpChange(value: string): void {
    this.otpValue = value;
    this.onChange(value);
    this.onTouched();
  }
}
