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

  async loadCurrentUser(): Promise<void> {
    try {
      const user = await firstValueFrom(
        this.http.get<User>(API_ENDPOINTS.AUTH.ME, { withCredentials: true }).pipe(
          catchError(() => of(null)) 
        )
      );
      this.currentUserSubject.next(user);
    } catch (error) {
      this.currentUserSubject.next(null);
    }
  }
  

  clear(): void {
    this.currentUserSubject.next(null);
  }

  get currentUser(): User | null {
    return this.currentUserSubject.value;
  }
}
