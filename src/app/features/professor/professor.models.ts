import { CreateUserRequest, UpdateUserRequest, User } from "@/core/models/user.model";
import { AcademicProgram } from "../academic-program/academic-program.models";
import { PaginationQuery } from "@/core/models/pagination-query.model";

export interface Professor extends User {
    phoneNumber: string;
    documentNumber: string;
    currentSemester: number;
    academicProgram: AcademicProgram;
}

export interface ProfessorFilter extends PaginationQuery {
    fullName?: string;
    email?: string;
    documentNumber?: string;
    academicProgram?: string;
}

export interface CreateProfessorRequest extends CreateUserRequest {
    acdemicProgram: string;
}

export interface UpdateProfessorRequest extends UpdateUserRequest {
    academicProgram?: string;
}