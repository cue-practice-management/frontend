import { SelectOption } from "@/shared/components/atoms/input-select/input-select.models";
import { Gender } from "../enums/gender.enum";
import { DocumentType } from "../enums/document-type.enum";

export const GENDER_SELECT_OPTIONS: SelectOption[] = [
    { label: 'Masculino', value: Gender.MALE },
    { label: 'Femenino', value: Gender.FEMALE },
    { label: 'Otro', value: Gender.OTHER },
]

export const DOCUMENT_TYPE_SELECT_OPTIONS: SelectOption[] = [
    { label: 'Cédula de ciudadanía', value: DocumentType.CC },
    { label: 'Tarjeta de identidad', value: DocumentType.TI },
    { label: 'Pasaporte', value: DocumentType.PASSPORT },
    { label: 'Cédula de extranjería', value: DocumentType.CE },
]

