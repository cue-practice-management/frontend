import { Subject } from 'rxjs';

export class ModalRef<T = any> {
    private readonly closed$ = new Subject<T | null>();
    private result: T | null = null;

    close(result: T | null = null) {
        this.result = result;
        this.closed$.next(this.result);
        this.closed$.complete();
    }

    afterClosed() {
        return this.closed$.asObservable();
    }
}
