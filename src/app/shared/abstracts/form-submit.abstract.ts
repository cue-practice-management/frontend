import { ErrorResponse } from "@/core/models/error.model";
import { ToastService, ToastType } from "@/core/services/toast.service";
import { HttpErrorResponse } from "@angular/common/http";
import { inject } from "@angular/core";
import { catchError, finalize, Observable, tap, throwError } from "rxjs";

const DEFAULT_ERROR_MESSAGE = 'Ocurrió un error inesperado.';
const DEFAULT_SUCCESS_MESSAGE = 'Guardado exitosamente';

export abstract class FormSubmitComponent<V, T> {
    protected successMessage = DEFAULT_SUCCESS_MESSAGE;
    protected onSuccess?(res: T): void;
    protected abstract submitData(data: V): Observable<T>;

    private readonly toastSevice = inject(ToastService);

    isLoading = false;

    submitForm(data: V): void {
        this.isLoading = true;

        this.submitData(data).pipe(
            tap(() => this.toastSevice.show(this.successMessage, ToastType.SUCCESS)),
            catchError((err: HttpErrorResponse) => {
                const errorResponse = err.error as ErrorResponse;
                const errorMessage = errorResponse.message || DEFAULT_ERROR_MESSAGE;
                
                this.toastSevice.show(errorMessage, ToastType.ERROR)
                return throwError(() => err);
            }),
            finalize(() => this.isLoading = false)
        ).subscribe({
            next: (res) => {
                this.onSuccess?.(res);
            }
        });
    }



}