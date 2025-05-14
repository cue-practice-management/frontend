import { PaginationQuery } from "@/core/models/pagination-query.model";

export interface Faculty {
    _id: string;
    name: string;
    description: string;
    deanName: string;
    deanEmail: string;
}

export interface FacultyFilter extends PaginationQuery {
    name?: string;
    description?: string;
    deanName?: string;
    deanEmail?: string;
}

export interface CreateFacultyRequest {
    name: string;
    description: string;
    deanName: string;
    deanEmail: string;
}

export interface UpdateFacultyRequest {
    name?: string;
    description?: string;
    deanName?: string;
    deanEmail?: string;
}