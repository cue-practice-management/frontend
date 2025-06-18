import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { TypeaheadConfig } from '@/shared/models/typeahead-item.model';
import { FormGroup, ValidatorFn } from '@angular/forms';
import { SelectOption } from '../../atoms/input-select/input-select.models';
import { MultiSelectConfig } from '../../atoms/input-multi-select/input-multi-select.models';
import { FileConfig } from '../../atoms/input-file/input-file.models';

export interface FormField {
  key: string;
  label: string;
  type: FormFieldType;
  placeholder?: string;
  validators?: ValidatorFn[];
  disabled?: boolean;
  value?: string | number | boolean | string[] | number[] | Date;
  typeaheadConfig?: TypeaheadConfig;
  multiSelectConfig?: MultiSelectConfig;
  selectOptions?: SelectOption[];
  fileConfig?: FileConfig;
  hiddenWhen?: (form: FormGroup) => boolean;
}

export interface FormFieldSection {
  title?: string;
  fields: FormField[];
}

export interface DynacmicFormConfig {
  sections: FormFieldSection[];
  buttonLabel?: string;
  title?: string;
  groupValidators?: ValidatorFn[];
}
