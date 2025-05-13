export interface PaginatedResult<T> {
  docs: T[];
  totalDocs: number;
  totalPages: number;
  page: number;
  limit: number;
}