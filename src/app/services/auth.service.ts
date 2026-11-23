import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Users } from '../models/users';
import { AuthResponse } from '../models/auth-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'https://server-lookeo-1n4hbhsyi-theyinyans-projects.vercel.app/api/auth';

  postLogin(user: Users) {
    return this.http.post<AuthResponse>(this.apiUrl + '/login', user);
  }

  postRegister(user: Users) {
    return this.http.post<AuthResponse>(this.apiUrl + '/register', user);
  }

  saveSession(response: AuthResponse) {
    localStorage.setItem('token', response.token);
    localStorage.setItem('user', JSON.stringify(response.user));
  }

  getSession(): AuthResponse | null {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (!token || !user) return null;

    return {
      token,
      user: JSON.parse(user),
    };
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
