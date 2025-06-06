import { PaginationQuery } from "@/core/models/pagination-query.model";
import { CompanyBasicInfo } from "../company/company.models";
import { StudentBasicInfo } from "../student/student.model";
import { StudentCompanyContractCancelledBy, StudentCompanyContractStatus } from "./student-company-contract.enums";

export interface StudentCompanyContract {
  _id: string;
  student: StudentBasicInfo;
  company: CompanyBasicInfo;
  startDate?: Date;
  endDate?: Date;
  isPaid: boolean;
  status: StudentCompanyContractStatus;
  contractUrl?: string;
  cancellationReason?: string;
  cancellationDate?: Date;
  cancelledBy?: StudentCompanyContractCancelledBy;
  createdAt: Date;
  updatedAt: Date;
}

export interface StudentCompanyContractFilter extends PaginationQuery {
    student?: string;
    company?: string;
    status?: StudentCompanyContractStatus;
}

export interface CreateStudentCompanyContractRequest {
    student: string;
    company: string;
    status: StudentCompanyContractStatus;
    startDate?: Date;
    endDate?: Date;
    isPaid?: boolean;
    cancellationReason?: string;
    cancellationDate?: Date;
    cancelledBy?: StudentCompanyContractCancelledBy;
}

export interface ActivateStudentCompanyContractRequest {
    startDate: Date;
    endDate: Date;
    isPaid: boolean;
}

export interface CancelStudentCompanyContractRequest {
    cancellationReason: string;
    cancellationDate: Date;
    cancelledBy: StudentCompanyContractCancelledBy;
}