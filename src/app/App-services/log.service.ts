import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private apiUrl = 'http://127.0.0.1:8000/api/logs'; 

  constructor(private http: HttpClient) {}

  log(event: string, details?: any) {
   // return this.afAuth.currentUser.then(currentUser => {
      const payload = {
        //userId: currentUser?.uid || 'anonymous',
        event,
        details: JSON.stringify(details) || {},
        //ip : '', // You can use a service to get the user's IP address
        //userAgent: navigator.userAgent,
        //timestamp: new Date().toISOString(),
      };
      return this.http.post(this.apiUrl, payload).toPromise();
    };
  }
