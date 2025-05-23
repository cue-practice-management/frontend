import { SelectOption } from "@/shared/components/atoms/input-select/input-select.models";
import { FormFieldType } from "@/shared/models/form-field-type.enum";

export interface DynamicFilterField {
  key: string;
  label: string;
  type: FormFieldType;
  placeholder: string;
  options?: SelectOption[]; 
}