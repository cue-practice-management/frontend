export const AUTH_PREFFIX = 'auth';
export const ADMIN_PREFFIX = 'admin';
export const STUDENT_PREFFIX = 'student';
export const PROFESSOR_PREFFIX = 'professor';
export const NOT_FOUND_PREFFIX = '**';

export const ROUTES = {
    AUTH: {
        LOGIN: `${AUTH_PREFFIX}/login`,
        RECOVER_PASSWORD: `${AUTH_PREFFIX}/recover-password`,
        RECOVER_PASSWORD_VALIDATE: `${AUTH_PREFFIX}/recover-password/validate`,
        RECOVER_PASSWORD_RESET: `${AUTH_PREFFIX}/recover-password/reset`,
    },
    HOME: '/',
    ADMIN: {
        HOME: `${ADMIN_PREFFIX}`,
        STUDENTS: `${ADMIN_PREFFIX}/students`,
        PROFESSORS: `${ADMIN_PREFFIX}/professors`,
        COMPANY_MENTORS: `${ADMIN_PREFFIX}/company-mentors`,
        FACULTIES: `${ADMIN_PREFFIX}/faculties`,
        ACADEMIC_PROGRAMS: `${ADMIN_PREFFIX}/academic-programs`,
        COMPANIES: `${ADMIN_PREFFIX}/companies`,
        COUNTRIES: `${ADMIN_PREFFIX}/countries`,
        CITIES: `${ADMIN_PREFFIX}/cities`,
        STUDENT_COMPANY_LINKING_PROCESS: `${ADMIN_PREFFIX}/student-company-linking-process`,
        NEWS: `${ADMIN_PREFFIX}/news`,
        STUDENT_COMPANY_CONTRACTS: `${ADMIN_PREFFIX}/student-company-contracts`,
        PRACTICE_TEMPLATES: `${ADMIN_PREFFIX}/practice-templates`,
        PRACTICE_DEFINITION:  `${ADMIN_PREFFIX}/practice-definitions`,
        PRACTICE_PROCESSES: `${ADMIN_PREFFIX}/practice-processes`,
    },
    STUDENT: {
        HOME: `${STUDENT_PREFFIX}`,
    },
    PROFESSOR: {
        HOME: `${PROFESSOR_PREFFIX}`,
    },
}

