export interface DashboardGeneralMetrics {
    totalStudents: number;
    totalStudentsWithoutCompany: number;
    totalProfessors: number;
    totalCompanies: number;
    totalPracticesInProgress: number;
}

export interface DashboardChartData {
    name: string;
    value: number;
}