import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoginRequestDto } from '../models/login-request.dto';
import { LoginResponseDto } from '../models/login-response.dto';
import { RefreshTokenResponseDto } from '../models/refresh-token-response.dto';
import { API_ENDPOINTS } from '@/core/constants/api-endpoints.constants';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private accessToken: string | null = null;

  constructor(private http: HttpClient) { }

  login(credentials: LoginRequestDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(API_ENDPOINTS.AUTH.LOGIN, credentials, { withCredentials: true }).pipe(
      tap(response => {
        this.accessToken = response.accessToken;
      })
    );
  }

  refreshToken(): Observable<RefreshTokenResponseDto> {
    return this.http.post<RefreshTokenResponseDto>(API_ENDPOINTS.AUTH.REFRESH, {}, { withCredentials: true }).pipe(
      tap(response => {
        this.accessToken = response.accessToken;
      })
    );
  }

  logout(): Observable<void> {
    return this.http.post<void>(API_ENDPOINTS.AUTH.LOGOUT, {}, { withCredentials: true }).pipe(
      tap(() => {
        this.accessToken = null;
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
