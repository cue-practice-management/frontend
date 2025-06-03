import { STUDENT_COMPANY_LINKING_PROCESS_STATUS_SELECT_OPTIONS } from "@/core/constants/select-options.constants";
import { DynamicFilterField } from "@/features/admin/components/admin-entity-filter/admin-entity-filter.models";
import { FormFieldType } from "@/shared/models/form-field-type.enum";

export const STUDENT_COMPANY_LINKING_PROCESS_FILTER_FIELDS: DynamicFilterField[] = [
    { key: 'student', label: 'Estudiante', type: FormFieldType.TYPEAHEAD, placeholder: 'Nombre o documento del estudiante' },
    { key: 'company', label: 'Empresa', type: FormFieldType.TYPEAHEAD, placeholder: 'Nombre de la empresa' },
    { key: 'status', label: 'Estado', type: FormFieldType.SELECT, placeholder: 'Estado', options: STUDENT_COMPANY_LINKING_PROCESS_STATUS_SELECT_OPTIONS }
];