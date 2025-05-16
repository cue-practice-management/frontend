export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: '/auth/login',
        REFRESH: '/auth/refresh',
        LOGOUT: '/auth/logout',
        ME: '/auth/me',
    },
    FACULTY: {
        GET: '/faculty',
        GET_TYPEAHEAD: '/faculty/typeahead',
        CREATE: '/faculty/create',
        UPDATE: (id: string) => `/faculty/update/${id}`,
        DELETE: (id: string) => `/faculty/delete/${id}`,
    },
    ACADEMIC_PROGRAM: {
        GET: '/academic-programs',
        CREATE: '/academic-programs/create',
        UPDATE: (id: string) => `/academic-programs/update/${id}`,
        DELETE: (id: string) => `/academic-programs/delete/${id}`,
    },
};
