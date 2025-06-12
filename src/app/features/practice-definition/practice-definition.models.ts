import { PaginationQuery } from "@/core/models/pagination-query.model";
import { AcademicProgram } from "../academic-program/academic-program.models";
import { PracticeTemplate } from "../practice-template/practice-template.models";

export interface PracticeDefinition {
    _id: string;
    name: string;
    description: string;
    semester: number;
    academicProgram: AcademicProgram;
    practiceTemplate: PracticeTemplate;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreatePracticeDefinitionRequest {
    name: string;
    description: string;
    semester: number;
    academicProgram: string;
    practiceTemplate: string;
}

export type UpdatePracticeDefinitionRequest = Partial<CreatePracticeDefinitionRequest>;

export interface PracticeDefinitionFilter extends PaginationQuery {
    name?: string;
    academicProgram?: string;
}