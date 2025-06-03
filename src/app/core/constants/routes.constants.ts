export const AUTH_PREFFIX = 'auth';
export const ADMIN_PREFFIX = 'admin';

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
    },
}

