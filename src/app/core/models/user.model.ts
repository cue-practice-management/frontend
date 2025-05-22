import { DocumentType } from "../enums/document-type.enum";
import { Gender } from "../enums/gender.enum";
import { UserRole } from "../enums/user-role.enum";

export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    photoUrl?: string;
    email: string;
    role: UserRole;
    typeOfDocument: DocumentType;
    gender: Gender;
}

export interface CreateUserRequest {
    firstName: string;
    lastName: string;
    typeOfDocument: DocumentType;
    documentNumber: string;
    phoneNumber?: string;
    birthDate?: Date;
    gender: Gender;
}

export interface UpdateUserRequest {
    firstName?: string;
    lastName?: string;
    typeOfDocument?: DocumentType;
    documentNumber?: string;
    phoneNumber?: string;
    birthDate?: Date;
    email?: string;
}