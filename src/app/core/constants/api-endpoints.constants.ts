export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: '/auth/login',
        REFRESH: '/auth/refresh',
        LOGOUT: '/auth/logout',
        ME: '/auth/me',
    },
    FACULTY: {
        GET: '/faculty',
        CREATE: '/faculty/create',
        UPDATE: (id: string) => `/faculty/update/${id}`,
        DELETE: (id: string) => `/faculty/delete/${id}`,
    }
};
