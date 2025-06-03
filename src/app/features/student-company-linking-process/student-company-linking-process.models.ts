import { PaginationQuery } from "@/core/models/pagination-query.model";
import { Company } from "../company/company.models";
import { Student } from "../student/student.model";
import { StudentCompanyLinkingProcessStatus } from "./student-company-linking-process.enums";

export interface StudentCompanyLinkingProcess {
    _id: string;
    student: Student;
    company: Company;
    status: StudentCompanyLinkingProcessStatus;
    observations?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateStudentCompanyLinkingProcess {
    student: string;
    company: string;
    status?: StudentCompanyLinkingProcessStatus;
    observations?: string;
}

export interface UpdateStudentCompanyLinkingProcessStatus {
    status: StudentCompanyLinkingProcessStatus;
    observations?: string;
}

export interface StudentCompanyLinkingProcessFilter extends PaginationQuery {
    student?: string;
    company?: string;
    status?: StudentCompanyLinkingProcessStatus;
}