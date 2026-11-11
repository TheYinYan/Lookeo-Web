import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/auth';

  postLogin(user: Users) {
    return this.http.post<Users>(this.apiUrl + '/login', user);
  }

  postRegister(user: Users) {
    return this.http.post<Users>(this.apiUrl + '/register', user);
  }
}
