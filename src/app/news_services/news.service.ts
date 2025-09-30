
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  private apiUrlpost = 'http://127.0.0.1:8000/api/newsstore';
  private apiUrlget= 'http://127.0.0.1:8000/api/news';
  private apiUrlDelete= 'http://127.0.0.1:8000/api/newsdestroy';

  sendMessage(data:any) {
    return this.http.post(this.apiUrlpost, data);
  }

  getNews(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlget);
  }

deleteNews(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrlDelete}/${id}`);
  }
getNewsById(id: number): Observable<any> {
  return this.http.get(`${this.apiUrlget}/${id}`);
  }


}