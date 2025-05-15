import { PaginationQuery } from "@/core/models/pagination-query.model";
import { Faculty } from "../faculty/faculty.models";

export interface AcademicProgram {
    _id: string;
    name: string;
    description: string;
    faculty: Faculty;
    coordinatorName: string;
    coordinatorEmail: string;
    createdAt: Date;
}

export interface AcademicProgramFilter extends PaginationQuery {
    name?: string;
    faculty?: string;
}

export interface CreateAcademicProgramRequest {
    name: string;
    description: string;
    faculty: string;
    coordinatorName: string;
    coordinatorEmail: string;
}

export interface UpdateAcademicProgramRequest {
    name?: string;
    description?: string;
    faculty?: string;
    coordinatorName?: string;
    coordinatorEmail?: string;
}