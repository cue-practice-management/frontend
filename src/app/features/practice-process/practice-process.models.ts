import { PaginationQuery } from "@/core/models/pagination-query.model";
import { CompanyBasicInfo } from "../company/company.models";
import { PracticeDefinition } from "../practice-definition/practice-definition.models";
import { Professor } from "../professor/professor.models";
import { Student } from "../student/student.model";
import { PracticeProcessCancelledBy, PracticeProcessStatus } from "./practice-process.enums";

export interface PracticeProcess {
    _id: string;
    practiceDefinition: PracticeDefinition,
    student: Student,
    professor: Professor,
    company: CompanyBasicInfo,
    startDate: Date,
    endDate: Date,
    status: PracticeProcessStatus,
    finalGrade?: number,
    cancelledBy?: PracticeProcessCancelledBy,
    cancellationDate?: Date,
    cancellationReason?: string,
    createdAt: Date,
    updatedAt: Date,
}

export interface PracticeProcessFilter extends PaginationQuery {
    student?: string;
    professor?: string;
    company?: string;
    practiceDefinition?: string;
    status?: PracticeProcessStatus;
}

export interface StartPracticeProcessRequest {
    practiceDefinition: string;
    student: string;
    professor: string;
    startDate: Date;
    endDate: Date;
}

export interface CancelPracticeProcessRequest {
    cancellationReason: string;
    cancelledBy: PracticeProcessCancelledBy;
}