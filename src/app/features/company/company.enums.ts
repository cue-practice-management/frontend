export enum CompanySize {
    MICRO = 'micro',
    PYME = 'pyme',
    LARGE = 'large',
}
export enum CompanyContractStatus {
    ACTIVE = 'active',
    TERMINATED = 'terminated',
    EXPIRED = 'expired',
}


export enum CompanyContractType {
    MARCO = 'marco',
}


export function getCompanySizeLabel(size: CompanySize): string {
    switch (size) {
        case CompanySize.MICRO:
            return 'Microempresa';
        case CompanySize.PYME:
            return 'Pyme';
        case CompanySize.LARGE:
            return 'Gran empresa';
        default:
            return 'Desconocido';
    }
}

export function getCompanyContractStatusLabel(status: CompanyContractStatus): string {
    switch (status) {
        case CompanyContractStatus.ACTIVE:
            return 'Activo';
        case CompanyContractStatus.TERMINATED:
            return 'Terminado';
        case CompanyContractStatus.EXPIRED:
            return 'Expirado';
        default:
            return 'Desconocido';
    }
}

export function getCompanyContractTypeLabel(type: CompanyContractType): string {
    switch (type) {
        case CompanyContractType.MARCO:
            return 'Marco';
        default:
            return 'Desconocido';
    }
}



