import { ErrorResponse } from "@/core/models/error.model";
import { ToastService, ToastType } from "@/core/services/toast.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";

const DEFAULT_ERROR_MESSAGE = 'Ocurrió un error inesperado.';

export abstract class RetrieveData<T> {
    isLoading = false;

    constructor(
        protected readonly toastService: ToastService
    ) { }

    protected abstract fetchData(): Observable<T>;
    protected abstract onDataLoaded(data: T): void;
    protected abstract onError(error: HttpErrorResponse): void;

    loadData(): void {
        this.isLoading = true;

        this.fetchData().subscribe({
            next: (data) => {
                this.onDataLoaded(data);
            },
            error: (error: HttpErrorResponse) => {
                this.onError(error);
                const errorResponse = error.error as ErrorResponse;
                const errorMessage = errorResponse.message || DEFAULT_ERROR_MESSAGE

                this.toastService.show(errorMessage, ToastType.ERROR);
            },
            complete: () => {
                this.isLoading = false;
            }
        });
    }
}