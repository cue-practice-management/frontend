export enum StudentCompanyLinkingProcessStatus {
    PENDING = 'pending',
    INTERVIEW_SCHEDULED = 'interview_scheduled',
    REJECTED = 'rejected',
    ACCEPTED = 'accepted',
}

export function getStudentCompanyLinkingProcessStatusLabel(status: StudentCompanyLinkingProcessStatus): string {
    switch (status) {
        case StudentCompanyLinkingProcessStatus.PENDING:
            return 'Pendiente';
        case StudentCompanyLinkingProcessStatus.INTERVIEW_SCHEDULED:
            return 'Entrevista programada';
        case StudentCompanyLinkingProcessStatus.REJECTED:
            return 'Rechazado';
        case StudentCompanyLinkingProcessStatus.ACCEPTED:
            return 'Aceptado';
        default:
            return 'Desconocido';
    }
}