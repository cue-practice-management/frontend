import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { PRACTICE_PROCESS_STATUS_SELECT_OPTIONS } from '@/core/constants/select-options.constants';
import { DynamicFilterField } from '@/features/admin/components/admin-entity-filter/admin-entity-filter.models';

export const PRACTICE_PROCESS_FILTER_FIELDS: DynamicFilterField[] = [
    { key: 'student', label: 'Estudiante', type: FormFieldType.TYPEAHEAD, placeholder: 'Busca un Estudiante...' },
    { key: 'professor', label: 'Profesor', type: FormFieldType.TYPEAHEAD, placeholder: 'Busca un Profesor...' },
    { key: 'company', label: 'Empresa', type: FormFieldType.TYPEAHEAD, placeholder: 'Busca una Empresa...' },
    { key: 'practiceDefinition', label: 'Práctica', type: FormFieldType.TYPEAHEAD, placeholder: 'Busca una Práctica...' },
    { key: 'status', label: 'Estado', type: FormFieldType.SELECT, placeholder: 'Estado', options: PRACTICE_PROCESS_STATUS_SELECT_OPTIONS }
];
