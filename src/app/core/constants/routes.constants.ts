export const AUTH_PREFFIX = 'auth';
export const ADMIN_PREFFIX = 'admin';

export const ROUTES = {
    AUTH: {
        LOGIN: `${AUTH_PREFFIX}/login`,
    },
    HOME: '/',
    ADMIN: {
        HOME: `${ADMIN_PREFFIX}`,
        FACULTIES: `${ADMIN_PREFFIX}/faculties`,
    }
}

