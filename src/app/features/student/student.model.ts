import { CreateUserRequest, UpdateUserRequest, User } from "@/core/models/user.model";
import { AcademicProgram } from "../academic-program/academic-program.models";
import { Gender } from "@/core/enums/gender.enum";
import { PaginationQuery } from "@/core/models/pagination-query.model";
import { Company } from "../company/company.models";

export interface Student extends User {
    academicProgram: AcademicProgram;
    phoneNumber: string;
    documentNumber: string;
    currentSemester: number;
    currentCompany?: Company;
    curriculumUrl?: string;
    epsCertificationUrl?: string;
}

export interface StudentFilter extends PaginationQuery {
    fullName?: string;
    email?: string;
    documentNumber?: string;
    gender?: Gender;
    academicProgram?: string;
    currentSemester?: number;
}

export interface CreateStudentRequest extends CreateUserRequest {
    academicProgram: string;
    currentSemester: number;
}

export interface UpdateStudentRequest extends UpdateUserRequest {
    academicProgram?: string;
    currentSemester?: number;
}

export type StudentBasicInfo = Omit<Student,'academicProgram' | 'currentCompany' | 'curriculumUrl' | 'epsCertificationUrl'>;