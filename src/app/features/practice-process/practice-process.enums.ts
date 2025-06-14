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