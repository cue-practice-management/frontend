import { PaginationQuery } from "@/core/models/pagination-query.model";
import { Country } from "../country/country.models";

export interface City {
    _id: string;
    name: string;
    country: Country;
    createdAt: Date;
    updatedAt: Date;
}

export interface CityFilter extends PaginationQuery {
    name?: string;
    country?: string;
}

export interface CreateCityRequest {
    name: string;
    country: string; 
}

export interface UpdateCityRequest {
    name?: string;
    country?: string; 
}