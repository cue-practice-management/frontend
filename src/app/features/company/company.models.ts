import { PaginationQuery } from "@/core/models/pagination-query.model";
import { AcademicProgram } from "../academic-program/academic-program.models";
import { CompanyContractStatus, CompanyContractType } from "./comany.enums";

export interface Company {
    _id: string;
    name: string;
    corporateName: string;
    nit: string;
    phone: string;
    logoUrl?: string;
    websiteUrl: string;
    openJobPositions: boolean;
    associatedAcademicPrograms: AcademicProgram[];
}

export interface CreateCompanyRequest {
    phone: string;
    websiteUrl: string;
    address: string;
    country: string;
    city: string;
    associatedAcademicPrograms?: string[];
}

export interface UpdateCompanyRequest {
    name?: string;
    corporateName?: string;
    nit?: string;
    phone?: string;
    logoUrl?: string;
    websiteUrl?: string;
    openJobPositions?: boolean;
    associatedAcademicPrograms?: string[];
}

export interface CompanyFilter extends PaginationQuery {
    name?: string;
    nit?: string;
    countryId?: string;
    cityId?: string;
    acdemicProgram?: string;
}

export interface CompanyContract {
    _id: string;
    company: string;
    fileUrl: string | null;
    startDate: Date;
    endDate: Date;
    status: string;
    type: string;
    observations?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateCompanyContractRequest {
    startDate: string;
    endDate: string;
    status: CompanyContractStatus;
    type: CompanyContractType;
    observations?: string;
}

export interface UpdateCompanyContractRequest {
    startDate?: string;
    endDate?: string;
    status?: CompanyContractStatus;
    type?: CompanyContractType;
    observations?: string;
}
