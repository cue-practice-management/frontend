import { CreateUserRequest, UpdateUserRequest, User } from "@/core/models/user.model";
import { Company } from "../company/company.models";
import { PaginationQuery } from "@/core/models/pagination-query.model";
import { Gender } from "@/core/enums/gender.enum";

export interface CompanyMentor extends User {
    company: Company;
    position: string;
    phoneNumber: string;
    documentNumber: string;
}

export interface CompanyMentorFilter extends PaginationQuery {
    fullName?: string;
    email?: string;
    documentNumber?: string;
    gender?: Gender;
    company?: string;
}

export interface CreateCompanyMentorRequest extends CreateUserRequest {
    company: string;
    position: number;
}

export interface UpdateCompanyMentorRequest extends UpdateUserRequest {
    company?: string;
    position?: number;
}