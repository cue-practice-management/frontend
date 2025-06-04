import { PaginationQuery } from "@/core/models/pagination-query.model";

export interface News {
    _id: string;
    title: string;
    summary: string;
    content: string;
    coverImageUrl: string;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
}

export interface NewsFilter extends PaginationQuery {
    title?: string;
    tags?: string[];
}

export interface CreateNewsRequest {
    title: string;
    summary: string;
    content: string;
    tags: string[];
}

export interface UpdateNewsRequest {
    title?: string;
    summary?: string;
    content?: string;
    tags?: string[];
}