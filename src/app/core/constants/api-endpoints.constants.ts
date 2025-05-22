export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: '/auth/login',
        REFRESH: '/auth/refresh',
        LOGOUT: '/auth/logout',
        ME: '/auth/me',
    },
    STUDENT: {
        GET: '/students',
        CREATE: '/students/create',
        UPDATE: (id: string) => `/students/update/${id}`,
        DELETE: (id: string) => `/students/delete/${id}`,
        GET_TYPEAHEAD: '/students/typeahead',
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
        GET_TYPEAHEAD: '/academic-programs/typeahead',
    },
};
