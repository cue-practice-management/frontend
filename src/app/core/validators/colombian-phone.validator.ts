import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function colombianPhoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const isValid = typeof value === 'string' && /^3\d{9}$/.test(value);
    return !value || isValid ? null : { colombianPhone: true };
  };
}