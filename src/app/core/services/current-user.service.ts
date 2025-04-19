import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, firstValueFrom, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { API_ENDPOINTS } from '../constants/api-endpoints.constants';

@Injectable({ providedIn: 'root' })
export class CurrentUserService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) { }


  load(): Promise<void> {
    return firstValueFrom(
      this.http.get<User>(API_ENDPOINTS.AUTH.ME).pipe(
        catchError(() => {
          this.currentUserSubject.next(null);
          return of(null);
        })
      )
    ).then(user => {
      if (user) {
        this.currentUserSubject.next(user);
      }
    });
  }


  clear(): void {
    this.currentUserSubject.next(null);
  }

  get currentUser(): User | null {
    return this.currentUserSubject.value;
  }
}
