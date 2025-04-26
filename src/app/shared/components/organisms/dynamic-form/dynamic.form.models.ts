import { FormFieldType } from '@/shared/models/form-field-type.model';
import { ValidatorFn } from '@angular/forms';


export interface FieldOption {
  label: string;
  value: string | number | boolean;
}

export interface FormField {
  key: string;
  label: string;
  type: FormFieldType;
  placeholder?: string;
  options?: FieldOption[]; 
  validators?: ValidatorFn[];
}

export interface FormFieldSection {
  title?: string;
  fields: FormField[];
}

export interface DynacmicFormConfig {
  sections: FormFieldSection[];
  buttonLabel?: string;
  title?: string;
}
