import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Item } from '../models/items';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/items';

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token') ?? '';
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  postItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, item, { headers: this.getHeaders() });
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  putItem(id: number, item: Item): Observable<Item> {
    return this.http.put<Item>(`${this.apiUrl}/${id}`, item, { headers: this.getHeaders() });
  }

  deleteItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
}
