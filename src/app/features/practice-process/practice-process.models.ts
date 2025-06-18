import { PaginationQuery } from "@/core/models/pagination-query.model";
import { CompanyBasicInfo } from "../company/company.models";
import { PracticeDefinition } from "../practice-definition/practice-definition.models";
import { Professor } from "../professor/professor.models";
import { Student } from "../student/student.model";
import { PracticeProcessCancelledBy, PracticeProcessDeliverableStatus, PracticeProcessFollowUpMode, PracticeProcessFollowUpStatus, PracticeProcessStatus } from "./practice-process.enums";

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

export interface PracticeProcessDetail extends PracticeProcess {
    deliverables: PracticeProcessDeliverable[];
    followUps: PracticeProcessFollowUp[];
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

export interface PracticeProcessDeliverable {
    _id: string;
    title: string;
    description?: string;
    dueDate: Date;
    submittedAt?: Date;
    submissionUrl?: string;
    status: PracticeProcessDeliverableStatus;
    grade?: number;
    gradeObservations?: string;
    gradedAt?: Date;
}

export interface SubmitPracticeProcessDeliverableRequest {
    file: File;
}

export interface GradePracticeProcessDeliverableRequest {
    grade: number;
    gradeObservations: string;
}

export interface PracticeProcessFollowUp {
    _id: string;
    status: PracticeProcessFollowUpStatus;
    mode: PracticeProcessFollowUpMode;
    meetingUrl?: string;
    location?: string;
    date: Date;
    outcomeNotes?: string;
    completedAt?: Date;
    cancelledAt?: Date;
    cancellationReason?: string;
    missedNotes?: string;
}

export interface SchedulePracticeProcessFollowUpRequest {
    mode: PracticeProcessFollowUpMode;
    date: Date;
    location?: string;
    meetingUrl?: string;
}

export interface CancelPracticeProcessFollowUpRequest {
    cancellationReason: string;
}

export interface CompletePracticeProcessFollowUpRequest {
    outcomeNotes: string;
}