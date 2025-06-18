import { SelectOption } from "@/shared/components/atoms/input-select/input-select.models";
import { Gender } from "../enums/gender.enum";
import { DocumentType } from "../enums/document-type.enum";
import { CompanyContractStatus, CompanyContractType, CompanySize } from "@/features/company/company.enums";
import { StudentCompanyLinkingProcessStatus } from "@/features/student-company-linking-process/student-company-linking-process.enums";
import { StudentCompanyContractCancelledBy, StudentCompanyContractStatus } from "@/features/student-company-contract/student-company-contract.enums";
import { PracticeProcessCancelledBy, PracticeProcessFollowUpMode, PracticeProcessStatus } from "@/features/practice-process/practice-process.enums";

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

export const STUDENT_COMPANY_CONTRACT_STATUS_SELECT_OPTIONS: SelectOption[] = [
    { label: 'Pendiente de firma', value: StudentCompanyContractStatus.PENDING_SIGNATURE },
    { label: 'Activo', value: StudentCompanyContractStatus.ACTIVE },
    { label: 'Finalizado', value: StudentCompanyContractStatus.FINISHED },
    { label: 'Cancelado', value: StudentCompanyContractStatus.CANCELLED },
]

export const STUDENT_COMPANY_CONTRACT_CANCELLED_BY_SELECT_OPTIONS: SelectOption[] = [
    { label: 'Estudiante', value: StudentCompanyContractCancelledBy.STUDENT },
    { label: 'Empresa', value: StudentCompanyContractCancelledBy.COMPANY },
    { label: 'Universidad', value: StudentCompanyContractCancelledBy.UNIVERSITY },
];

export const PRACTICE_PROCESS_CANCELLED_BY_SELECT_OPTIONS: SelectOption[] = [
    { label: 'Estudiante', value: PracticeProcessCancelledBy.STUDENT },
    { label: 'Empresa', value: PracticeProcessCancelledBy.COMPANY },
    { label: 'Universidad', value: PracticeProcessCancelledBy.UNIVERSITY },
]

export const PRACTICE_PROCESS_STATUS_SELECT_OPTIONS: SelectOption[] = [
    { label: 'Pendiente', value: PracticeProcessStatus.PENDING },
    { label: 'En curso', value: PracticeProcessStatus.IN_PROGRESS },
    { label: 'Completado', value: PracticeProcessStatus.COMPLETED },
    { label: 'Cancelado', value: PracticeProcessStatus.CANCELLED },
]

export const PRACTICE_PROCESS_FOLLOW_UP_MODE_SELECT_OPTIONS: SelectOption[] = [
    { label: 'Presencial', value: PracticeProcessFollowUpMode.IN_PERSON },
    { label: 'Virtual', value: PracticeProcessFollowUpMode.ONLINE },
]