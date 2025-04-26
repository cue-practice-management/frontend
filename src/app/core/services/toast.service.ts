// core/services/toast.service.ts
import { Injectable, signal } from '@angular/core';

export enum ToastType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning'
}

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
  duration?: number;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private _toasts = signal<Toast[]>([]);
  readonly toasts = this._toasts.asReadonly();

  private nextId = 0;

  show(message: string, type: ToastType = ToastType.INFO, duration = 3000) {
    const toast: Toast = {
      id: this.nextId++,
      message,
      type,
      duration
    };

    this._toasts.update(toasts => [...toasts, toast]);

    setTimeout(() => this.dismiss(toast.id), duration);
  }

  dismiss(id: number) {
    this._toasts.update(toasts => toasts.filter(t => t.id !== id));
  }
}
