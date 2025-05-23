import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { TypeaheadConfig } from '@/shared/models/typeahead-item.model';
import { ValidatorFn } from '@angular/forms';
import { SelectOption } from '../../atoms/input-select/input-select.models';

export interface FormField {
  key: string;
  label: string;
  type: FormFieldType;
  placeholder?: string;
  validators?: ValidatorFn[];
  disabled?: boolean;
  value?: string | number | boolean;
  typeaheadConfig?: TypeaheadConfig;
  selectOptions?: SelectOption[];
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
