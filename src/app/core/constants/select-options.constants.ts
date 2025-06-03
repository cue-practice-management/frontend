import { SelectOption } from "@/shared/components/atoms/input-select/input-select.models";
import { Gender } from "../enums/gender.enum";
import { DocumentType } from "../enums/document-type.enum";
import { CompanyContractStatus, CompanyContractType, CompanySize } from "@/features/company/company.enums";
import { StudentCompanyLinkingProcessStatus } from "@/features/student-company-linking-process/student-company-linking-process.enums";

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


export const COMPANY_SIZE_SELECT_OPTIONS: SelectOption[] = [
    { label: 'Microempresa', value: CompanySize.MICRO },
    { label: 'Pyme', value: CompanySize.PYME },
    { label: 'Gran empresa', value: CompanySize.LARGE },
]

export const COMPANY_CONTRACT_TYPE_SELECT_OPTIONS: SelectOption[] = [
    { label: 'Marco', value: CompanyContractType.MARCO }
]

export const COMPANY_CONTRACT_STATUS_SELECT_OPTIONS: SelectOption[] = [
    { label: 'Activo', value: CompanyContractStatus.ACTIVE },
    { label: 'Expirado', value: CompanyContractStatus.EXPIRED },
    { label: 'Terminado', value: CompanyContractStatus.TERMINATED },
]


export const STUDENT_COMPANY_LINKING_PROCESS_STATUS_SELECT_OPTIONS: SelectOption[] = [
    { label: 'Pendiente', value: StudentCompanyLinkingProcessStatus.PENDING },
    { label: 'Entrevista programada', value: StudentCompanyLinkingProcessStatus.INTERVIEW_SCHEDULED },
    { label: 'Rechazado', value: StudentCompanyLinkingProcessStatus.REJECTED },
    { label: 'Aceptado', value: StudentCompanyLinkingProcessStatus.ACCEPTED },
]
