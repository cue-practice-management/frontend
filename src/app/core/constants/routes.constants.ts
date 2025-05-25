export const AUTH_PREFFIX = 'auth';
export const ADMIN_PREFFIX = 'admin';

export const ROUTES = {
    AUTH: {
        LOGIN: `${AUTH_PREFFIX}/login`,
        RECOVER_PASSWORD: `${AUTH_PREFFIX}/recover-password`,
    },
    HOME: '/',
    ADMIN: {
        HOME: `${ADMIN_PREFFIX}`,
        STUDENTS: `${ADMIN_PREFFIX}/students`,
        PROFESSORS: `${ADMIN_PREFFIX}/professors`,
        FACULTIES: `${ADMIN_PREFFIX}/faculties`,
        ACADEMIC_PROGRAMS: `${ADMIN_PREFFIX}/academic-programs`,

    },
}

