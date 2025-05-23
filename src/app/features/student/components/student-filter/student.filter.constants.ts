import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { GENDER_SELECT_OPTIONS } from '@/core/constants/select-options.constants';
import { DynamicFilterField } from '@/features/admin/components/admin-entity-filter/admin-entity-filter.models';

export const STUDENT_FILTER_FIELDS: DynamicFilterField[] = [
  { key: 'fullName', label: 'Nombre completo', type: FormFieldType.TEXT, placeholder: 'Nombre completo' },
  { key: 'email', label: 'Correo electrónico', type: FormFieldType.TEXT, placeholder: 'Correo electrónico' },
  { key: 'documentNumber', label: 'Número de documento', type: FormFieldType.TEXT, placeholder: 'Número de documento' },
  { key: 'currentSemester', label: 'Semestre actual', type: FormFieldType.TEXT, placeholder: 'Semestre actual' },
  { key: 'academicProgram', label: 'Programa académico', type: FormFieldType.TYPEAHEAD, placeholder: 'Programa académico' },
  { key: 'gender', label: 'Género', type: FormFieldType.SELECT, placeholder: 'Género', options: GENDER_SELECT_OPTIONS }
];
