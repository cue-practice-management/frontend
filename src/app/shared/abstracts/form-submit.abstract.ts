import { ErrorResponse } from "@/core/models/error.model";
import { ToastService, ToastType } from "@/core/services/toast.service";
import { HttpErrorResponse } from "@angular/common/http";
import { inject } from "@angular/core";
import { catchError, finalize, Observable, tap, throwError } from "rxjs";

export abstract class FormSubmitComponent<V, T> {
    protected successMessage = 'Guardado exitosamente';
    protected onSuccess?(res: T): void;
    protected abstract submitData(data: V): Observable<T>;

    private readonly toastSevice = inject(ToastService);

    isLoading = false;

    submitForm(data: V): void {
        this.isLoading = true;

        this.submitData(data).pipe(
            tap(() => alert(this.successMessage)),
            catchError((err: HttpErrorResponse) => {
                const errorResponse = err.error as ErrorResponse;
                
                this.toastSevice.show(errorResponse.message, ToastType.ERROR)
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