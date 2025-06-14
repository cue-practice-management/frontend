import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const dateRangeValidator: ValidatorFn = (group: AbstractControl, startDateKey: string = 'startDate', endDateKey: string = 'endDate'): ValidationErrors | null => {
    const start = group.get(startDateKey)
    const end = group.get(endDateKey);

    if (start && end) {
        const startDate = new Date(start.value);
        const endDate = new Date(end.value);

        if (startDate > endDate) {
            end.setErrors({ endBeforeStart: true });
        } else {
            const currentErrors = end.errors;
            if (currentErrors && currentErrors['endBeforeStart']) {
                delete currentErrors['endBeforeStart'];
                end.setErrors(Object.keys(currentErrors).length ? currentErrors : null);
            }
        }
    }

    return null;
};