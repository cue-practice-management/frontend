import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { LoginRequestDto } from '../models/login-request.dto';
import { LoginResponseDto } from '../models/login-response.dto';
import { RefreshTokenResponseDto } from '../models/refresh-token-response.dto';
import { API_ENDPOINTS } from '@/core/constants/api-endpoints.constants';
import { CurrentUserService } from '@/core/services/current-user.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private accessToken: string | null = null;

  constructor(
    private http: HttpClient,
    private currentUserService: CurrentUserService
  ) {}

  login(credentials: LoginRequestDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(API_ENDPOINTS.AUTH.LOGIN, credentials, {
      withCredentials: true
    }).pipe(
      tap(response => {
        this.accessToken = response.accessToken;
      })
    );
  }

  refreshToken(): Observable<RefreshTokenResponseDto | null> {
    return this.http.post<RefreshTokenResponseDto>(
      API_ENDPOINTS.AUTH.REFRESH,
      {},
      { withCredentials: true }
    ).pipe(
      tap(response => {
        this.accessToken = response.accessToken;
      }),
      catchError(error => {
        this.accessToken = null;
        return of(null); 
      })
    );
  }

  logout(): Observable<void> {
    this.accessToken = null;
    this.currentUserService.clear();

    return this.http.post<void>(API_ENDPOINTS.AUTH.LOGOUT, {}, {
      withCredentials: true
    }).pipe(
      catchError(error => {
        console.warn('Logout failed', error);
        return of();
      })
    );
  }

  getAccessToken(): string | null {
    return this.accessToken;
  }

  setAccessToken(token: string) {
    this.accessToken = token;
  }
}
