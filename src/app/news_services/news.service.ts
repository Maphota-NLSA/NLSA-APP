
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
  private apiUrlNotificationpost= 'http://127.0.0.1:8000/api/notificationsstore';
  private apiUrlImage= 'http://127.0.0.1:8000/api/Imagestore';
  private apiUrlGetImage= 'http://127.0.0.1:8000/api/Image';
  private apiUrlNotificationget= 'http://127.0.0.1:8000/api/notificationget';

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

  notification(data:any) {
    return this.http.post(this.apiUrlNotificationpost, data);
  }

  getnotification(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlNotificationget);
  }

  imageStore(data:any) {
    return this.http.post(this.apiUrlImage, data);
  }

  getImage(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlGetImage);
  }

}