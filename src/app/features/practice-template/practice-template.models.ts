import { PaginationQuery } from "@/core/models/pagination-query.model";

export interface PracticeTemplate {
    _id: string,
    name: string,
    description?: string,
    deliverables: PracticeTemplateDeliverable[],
    formats: PracticeTemplateFormat[];
    createdAt: Date;
    updatedAt: Date;
}

export interface PracticeTemplateFilter extends PaginationQuery {
    name?: string;
}

export type CreatePracticeTemplateRequest = Omit<PracticeTemplate, '_id' | 'createdAt' | 'updatedAt' | 'deliverables' | 'formats'>;
export type UpdatePracticeTemplateRequest = Partial<Omit<PracticeTemplate, 'createdAt' | 'updatedAt' | 'deliverables' | 'formats'>>;

export interface PracticeTemplateDeliverable {
    _id: string;
    title: string;
    description?: string;
    estimatedDueOffsetDays: number;
    createdAt: Date;
    updatedAt: Date;
}

export type CreatePracticeTemplateDeliverableRequest = Omit<PracticeTemplateDeliverable, '_id' | 'createdAt' | 'updatedAt'>;
export type UpdatePracticeTemplateDeliverableRequest = Partial<Omit<PracticeTemplateDeliverable, '_id' | 'createdAt' | 'updatedAt'>>;

export interface PracticeTemplateFormat {
    _id: string;
    name: string;
    description: string;
    fileUrl: string;
    createdAt: Date;
    updatedAt: Date;
}

export type CreatePracticeTemplateFormat = Omit<PracticeTemplateFormat, '_id' | 'createdAt' | 'updatedAt'>;
export type UpdatePracticeTemplateFormat = Partial<Omit<PracticeTemplateFormat, '_id' | 'createdAt' | 'updatedAt'>>;

