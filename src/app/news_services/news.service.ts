
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = 'http://127.0.0.1:8000/news'; // ← Your Laravel URL

  constructor(private http: HttpClient) {}

  getNews(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
}
getNewsById(id: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/${id}`);
}


}