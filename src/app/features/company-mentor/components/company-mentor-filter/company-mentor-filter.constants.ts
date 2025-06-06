import { GENDER_SELECT_OPTIONS } from "@/core/constants/select-options.constants";
import { DynamicFilterField } from "@/features/admin/components/admin-entity-filter/admin-entity-filter.models";
import { FormFieldType } from "@/shared/models/form-field-type.enum";

export const COMPANY_MENTOR_FILTER_FIELDS: DynamicFilterField[] = [
    { key: 'fullName', label: 'Nombre completo', type: FormFieldType.TEXT, placeholder: 'Nombre completo' },
    { key: 'email', label: 'Correo electrónico', type: FormFieldType.TEXT, placeholder: 'Correo electrónico' },
    { key: 'documentNumber', label: 'Número de documento', type: FormFieldType.TEXT, placeholder: 'Número de documento' },
    { key: 'company', label: 'Empresa', type: FormFieldType.TYPEAHEAD, placeholder: 'Empresa' },
    { key: 'gender', label: 'Género', type: FormFieldType.SELECT, placeholder: 'Género', options: GENDER_SELECT_OPTIONS }
];
