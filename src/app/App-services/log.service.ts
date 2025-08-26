import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LogService {
  private apiUrl = 'http://127.0.0.1:8000/api/logs'; 

  constructor(private http: HttpClient) {}

  log(event: string, details?: any) {
      const payload = {
        event,
        details: JSON.stringify(details) || {},
      };
      return this.http.post(this.apiUrl, payload).toPromise();
    };
  }
