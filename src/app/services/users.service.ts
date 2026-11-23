import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);
  private apiUrl = 'https://server-lookeo-1n4hbhsyi-theyinyans-projects.vercel.app/api/users';

  getUsers(name?: string, email?: string, password?: string) {
    let params = new HttpParams();
    if (name) params = params.set('name', name);
    if (email) params = params.set('email', email);
    if (password) params = params.set('password', password);

    return this.http.get<Users[]>(this.apiUrl, { params });
  }
}
