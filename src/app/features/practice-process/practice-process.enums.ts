export enum PracticeProcessStatus {
    PENDING = 'pending',
    IN_PROGRESS = 'in_progress',
    COMPLETED = 'completed',
    CANCELLED = 'cancelled',
}

export enum PracticeProcessCancelledBy {
    STUDENT = 'student',
    COMPANY = 'company',
    UNIVERSITY = 'university',
}

export enum PracticeProcessDeliverableStatus {
    SCHEDULED = 'scheduled',
    PENDING = 'pending',
    SUBMITTED = 'submitted',
    GRADED = 'graded',
}

export enum PracticeProcessFollowUpStatus {
    SCHEDULED = 'scheduled',
    COMPLETED = 'completed',
    CANCELLED = 'cancelled',
    MISSED = 'missed',
}

export const PRACTICE_PROCESS_STATUS_LABELS: Record<PracticeProcessStatus, string> = {
    [PracticeProcessStatus.PENDING]: 'Pendiente',
    [PracticeProcessStatus.IN_PROGRESS]: 'En Progreso',
    [PracticeProcessStatus.COMPLETED]: 'Completado',
    [PracticeProcessStatus.CANCELLED]: 'Cancelado',
}

export const PRACTICE_PROCESS_CANCELLED_BY_LABELS: Record<PracticeProcessCancelledBy, string> = {
    [PracticeProcessCancelledBy.STUDENT]: 'Estudiante',
    [PracticeProcessCancelledBy.COMPANY]: 'Empresa',
    [PracticeProcessCancelledBy.UNIVERSITY]: 'Universidad',
}

export const PRACTICE_PROCESS_DELIVERABLE_STATUS_LABELS: Record<PracticeProcessDeliverableStatus, string> = {
    [PracticeProcessDeliverableStatus.SCHEDULED]: 'Programado',
    [PracticeProcessDeliverableStatus.PENDING]: 'Pendiente',
    [PracticeProcessDeliverableStatus.SUBMITTED]: 'Entregado',
    [PracticeProcessDeliverableStatus.GRADED]: 'Calificado',
};

export const PRACTICE_PROCESS_FOLLOW_UP_STATUS_LABELS: Record<PracticeProcessFollowUpStatus, string> = {
    [PracticeProcessFollowUpStatus.SCHEDULED]: 'Programado',
    [PracticeProcessFollowUpStatus.COMPLETED]: 'Completado',
    [PracticeProcessFollowUpStatus.CANCELLED]: 'Cancelado',
    [PracticeProcessFollowUpStatus.MISSED]: 'No Asistido',
};