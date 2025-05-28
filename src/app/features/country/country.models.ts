import { PaginationQuery } from "@/core/models/pagination-query.model";

export interface Country {
    _id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CountryFilter extends PaginationQuery {
    name?: string;
}

export interface CreateCountryRequest { 
    name: string;
}

export interface UpdateCountryRequest {
    name?: string;
}


