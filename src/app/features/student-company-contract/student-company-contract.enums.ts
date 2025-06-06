export enum StudentCompanyContractStatus {
  PENDING_SIGNATURE = 'pending_signature',
  ACTIVE = 'active',
  FINISHED = 'finished',
  CANCELLED = 'cancelled',
}


export enum StudentCompanyContractCancelledBy {
  STUDENT = 'student',
  COMPANY = 'company',
  UNIVERSITY = 'university',
}


export function getStudentCompanyContractStatusLabel(status: StudentCompanyContractStatus): string {
  switch (status) {
    case StudentCompanyContractStatus.PENDING_SIGNATURE:
      return 'Pendiente de Firma';
    case StudentCompanyContractStatus.ACTIVE:
      return 'Activo';
    case StudentCompanyContractStatus.FINISHED:
      return 'Finalizado';
    case StudentCompanyContractStatus.CANCELLED:
      return 'Cancelado';
    default:
      return 'Desconocido';
  }
}

export function getStudentCompanyContractCancelledByLabel(cancelledBy: StudentCompanyContractCancelledBy): string {
  switch (cancelledBy) {
    case StudentCompanyContractCancelledBy.STUDENT:
      return 'Estudiante';
    case StudentCompanyContractCancelledBy.COMPANY:
      return 'Empresa';
    case StudentCompanyContractCancelledBy.UNIVERSITY:
      return 'Universidad';
    default:
      return 'Desconocido';
  }
}
