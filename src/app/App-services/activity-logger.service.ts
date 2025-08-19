import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityLoggerService {
 
  private apiUrl = 'http://127.0.0.1:8000/api/log-activity'; // Adjust the URL as needed

  constructor(private http: HttpClient) {}
  logActivity(type:string, details:any={}){
    const payload = {
      visitor_id: this.getOrCreateVisitorId(),
      activity_type: type,
      details: details,
      timestamp: new Date().toISOString(),
    };
    // Send the log to your backend API 
    return this.http.post(this.apiUrl, payload);
      //this.http.post('/api/log-activity', payload).subscribe();
  }
  getOrCreateVisitorId(): string {
  const key = 'visitorId';
  let visitorId = localStorage.getItem(key);
  if (!visitorId) {
    visitorId = Math.random().toString(36).substring(2) + Date.now().toString(36);
    localStorage.setItem(key, visitorId);
  }
  return visitorId;
}
}

// export function 