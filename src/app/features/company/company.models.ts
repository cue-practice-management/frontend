import { PaginationQuery } from "@/core/models/pagination-query.model";
import { AcademicProgram } from "../academic-program/academic-program.models";
import { CompanyContractStatus, CompanyContractType, CompanySize } from "./company.enums";
import { City } from "../city/city.models";
import { Country } from "../country/country.models";

export interface Company {
    _id: string;
    name: string;
    corporateName: string;
    nit: string;
    phone: string;
    city: City;
    country: Country;
    address: string;
    size: CompanySize;
    logoUrl?: string;
    websiteUrl: string;
    openJobPositions: boolean;
    associatedAcademicPrograms: AcademicProgram[];
}

export interface CompanyDetail extends Company {
    contracts: CompanyContract[];
}

export interface CreateCompanyRequest {
    name: string;
    corporateName: string;
    nit: string;
    phone: string;
    websiteUrl: string;
    address: string;
    size: CompanySize;
    country: string;
    city: string;
    associatedAcademicPrograms?: string[];
}

export interface UpdateCompanyRequest {
    name?: string;
    corporateName?: string;
    nit?: string;
    phone?: string;
    websiteUrl?: string;
    address?: string;
    size?: CompanySize;
    country?: string;
    city?: string;
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
    status: CompanyContractStatus;
    type: CompanyContractType;
    observations?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CompanyContractFilter extends PaginationQuery {
    type?: CompanyContractType;
    status?: CompanyContractStatus;
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
