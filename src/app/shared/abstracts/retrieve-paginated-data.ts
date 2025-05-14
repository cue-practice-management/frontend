import { PaginatedResult } from "@/core/models/paginated-result.model";
import { PaginationQuery } from "@/core/models/pagination-query.model";
import { catchError, finalize, Observable, of } from "rxjs";

export abstract class RetrievePaginatedData<T, U extends PaginationQuery = PaginationQuery> {
  isLoading = false;
  pageData!: PaginatedResult<T>;
  protected filter!: U;

  loadPageData(filter: U): void {
    this.isLoading = true;
    this.filter = filter;

    this.fetchPage(filter).pipe(
      finalize(() => (this.isLoading = false)),
      catchError(() => {
        this.pageData = this.getEmptyResult(filter);
        return of(this.pageData);
      })
    ).subscribe((result) => {
      this.pageData = result;
    });
  }

  protected getEmptyResult(filter: U): PaginatedResult<T> {
    return {
      docs: [],
      totalDocs: 0,
      totalPages: 1,
      page: filter.page,
      limit: filter.limit
    };
  }

  protected abstract fetchPage(filter: U): Observable<PaginatedResult<T>>;
}