import { UserRole } from "../enums/user-role.enum";

export interface User {
    _id: string;
    email: string;
    role: UserRole;
    firstName: string;
    lastName: string;
    photoUrl?: string;    
}