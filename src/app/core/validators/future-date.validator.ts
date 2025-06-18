import { AbstractControl, ValidationErrors } from "@angular/forms";

export function futureDateValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) return null;

    const date = new Date(value);
    const now = new Date();

    if (date <= now) {
        return { notFutureDate: true };
    }

    return null;
}