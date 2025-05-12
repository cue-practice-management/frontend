import { computed, Injectable, signal } from '@angular/core';
import { catchError, firstValueFrom, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { API_ENDPOINTS } from '../constants/api-endpoints.constants';

@Injectable({ providedIn: 'root' })
export class CurrentUserService {

  private _currentUser = signal<User | null>(null);

  readonly currentUser = computed(() => this._currentUser());

  constructor(private http: HttpClient) { }

  async loadCurrentUser(): Promise<void> {
    try {
      const user = await firstValueFrom(
        this.http.get<User>(API_ENDPOINTS.AUTH.ME, { withCredentials: true }).pipe(
          catchError(() => of(null))
        )
      );
      this._currentUser.set(user);
    } catch (error) {
      this._currentUser.set(null);
    }
  }


  clear(): void {
    this._currentUser.set(null);
  }

  get currentUserValue(): User | null {
    return this._currentUser();
  }
}
