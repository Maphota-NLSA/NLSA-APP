import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ContactformService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://127.0.0.1:8000/api/contactform/add';

  sendMessage(data:any) {
    return this.http.post(this.apiUrl, data);
  }
}
